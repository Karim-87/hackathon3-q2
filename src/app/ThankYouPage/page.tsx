import Link from "next/link";

const ThankYouPage = () => {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Thank You for Your Purchase!</h1>
        <p className="text-lg">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <p className="mt-4">
          <Link href="/" className="text-blue-500 underline">
            Return to Homepage
          </Link>
        </p>
      </div>
    );
  };
  
  export default ThankYouPage;
  