'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // State to hold customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    contactNo: '',
    email: '',
    paymentMethod: '',
  });

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    // Here, you can integrate with a payment API (e.g., Stripe)
    alert(`Payment successful! Total: $${totalPrice.toFixed(2)}`);

    // Clear the cart after payment
    clearCart();

    // Redirect to a confirmation page
    router.push('/ThankYouPage');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can process the payment with the provided customer info
    handlePayment();
  };

  if (cart.length === 0) {
    return <p className="text-center text-lg font-semibold">Your cart is empty!</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Customer Information Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="name" className="block font-semibold">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="contactNo" className="block font-semibold">Contact Number</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={customerInfo.contactNo}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="paymentMethod" className="block font-semibold">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={customerInfo.paymentMethod}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add more payment options as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Complete Payment
        </button>
      </form>

      {/* Cart Information */}
      <div className="border-t border-gray-300">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-300">
            <span>{item.name}</span>
            <span>${item.price} x {item.quantity}</span>
            <span>Total: ${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold">
          Grand Total: <span className="text-green-500">${totalPrice.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
};

export default CheckoutPage;

