

'use client';

import React, { createContext, useContext, useState } from 'react';
import { client } from '../../hackathon-template02/sanity-migration/sanityClient';
// Define types for the cart items

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // Add image to CartItem
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, change: number) => void; // Add updateQuantity function
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };


  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + change, 1) } // Ensure quantity does not go below 1
          : cartItem
      );
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

