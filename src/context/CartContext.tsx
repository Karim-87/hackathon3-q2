

'use client';

import React, { createContext, useContext, useState } from 'react';
import { client } from '../../hackathon-template02/sanity-migration/sanityClient';
// Define types for the cart items
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // Add image to CartItem
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void; // Add updateQuantity function
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

// Modify addToCart and removeFromCart functions to manage quantities accordingly.
// const addToCart = (item: Omit<CartItem, 'quantity'>) => {
//   setCart((prevCart) => {
//     const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       // If item already in cart, increase quantity
//       return prevCart.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//     }
//     return [...prevCart, { ...item, quantity: 1 }];
//   });

//   // Decrease the quantity in the database
//   updateProductQuantity(item.id, item.quantity - 1); // Reduce the stock in the database after adding to cart
// };
// new type


  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + change, 1) } // Ensure quantity does not go below 1
          : cartItem
      );
    });
  };
// In CartContext.tsx, update the product quantity in the cart and in the database after checkout
// const updateProductQuantity = async (id: string, quantity: number) => {
//   try {
//     await client.patch(id)
//       .set({ quantity })
//       .commit();
//   } catch (error) {
//     console.error("Error updating product quantity:", error);
//   }
// };



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


// 'use client';

// import React, { createContext, useContext, useState } from 'react';
// import { client } from '../../hackathon-template02/sanity-migration/sanityClient';

// // Define types for the cart items
// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string; // Add image to CartItem
// };

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (item: Omit<CartItem, 'quantity'>) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, change: number) => void; // Add updateQuantity function
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Function to update the product quantity in the database
//   const updateProductQuantity = async (id: number, quantity: number) => {
//     try {
//       await client.patch(id)
//         .set({ quantity })
//         .commit();
//     } catch (error) {
//       console.error("Error updating product quantity:", error);
//     }
//   };

//   // Add item to cart and update quantity
//   const addToCart = (item: Omit<CartItem, 'quantity'>) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         // If item already in cart, increase quantity
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });

//     // Decrease the quantity in the database
//     updateProductQuantity(item.id, item.quantity - 1); // Reduce the stock in the database after adding to cart
//   };

//   // Remove item from cart
//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
//   };

//   // Update the quantity of an item in the cart
//   const updateQuantity = (id: number, change: number) => {
//     setCart((prevCart) => {
//       return prevCart.map((cartItem) =>
//         cartItem.id === id
//           ? { ...cartItem, quantity: Math.max(cartItem.quantity + change, 1) } // Ensure quantity does not go below 1
//           : cartItem
//       );
//     });

//     // Update the product quantity in the database after changing the quantity in the cart
//     const item = cart.find((cartItem) => cartItem.id === id);
//     if (item) {
//       updateProductQuantity(id, item.quantity - change); // Update the database with the new quantity
//     }
//   };

//   // Clear the cart
//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
