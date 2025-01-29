'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Add the updateQuantity function

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string, change: number) => {
    updateQuantity(id, change); // Adjust quantity based on the change
  };

  if (cart.length === 0) {
    return <div className="text-center text-lg font-semibold">
      Your cart is empty! 
      <div><Link href="/ProductPage">
      <button className='text-center bg-blue-500 text-white p-2 m-4 rounded-md hover:bg-blue-600'>
        View Products</button></Link></div></div>;
    
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="border-t border-gray-300">
        <div className="grid grid-cols-5 font-bold py-4">
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Actions</span>
        </div>
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 items-center py-4 border-b border-gray-300"
          >
            {/* Product Image */}
            <div>
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
            {/* Product Name */}
            <div>
              <p className="text-lg font-bold">{item.name}</p>
            </div>
            {/* Product Price */}
            <div>
              <p>${item.price}</p>
            </div>
            {/* Product Quantity */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="bg-gray-300 text-black rounded-md px-2 py-1 hover:bg-gray-400"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="bg-gray-300 text-black rounded-md px-2 py-1 hover:bg-gray-400"
              >
                +
              </button>
            </div>
            {/* Remove Button */}
            <div>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold">
          Total: <span className="text-green-500">${totalPrice.toFixed(2)}</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:gap-4 mt-6">
        <Link
          href="/ProductPage"
          className="p-4 font-bold text-2xl bg-blue-500 text-white rounded-md mb-4 sm:mb-0"
        >
          Continue Shopping
        </Link>
        <Link
          href="/CheckoutPage"
          className="p-4 font-bold text-2xl bg-green-600 text-white rounded-md"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
