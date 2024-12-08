export default function ShoppingCart() {
    return (
        <div className="w-full max-w-[1440px] mx-auto bg-[#F9F9F9] px-4 sm:px-8">
            {/* Header */}
            <div className="pt-16 sm:pt-24 text-2xl font-semibold text-[#2A254B] text-center sm:text-left">
                Your shopping cart
            </div>

            {/* Headings */}
            <div className="flex justify-between items-center mt-12 text-sm text-[#2A254B] border-b pb-4">
                <h6 className="w-1/3 text-left">Products</h6>
                <h6 className="w-1/3 text-center">Quantity</h6>
                <h6 className="w-1/3 text-right">Total</h6>
            </div>

            {/* Cart Products */}
            <div className="divide-y mt-4">
                {/* Product 1 */}
                <div className="flex justify-between items-center py-4">
                    <div className="w-1/3 flex items-center gap-4">
                        <img
                            src="list image 1.png"
                            alt="product 1"
                            className="w-16 h-16 object-cover"
                        />
                        <span className="text-sm">Product 1</span>
                    </div>
                    <div className="w-1/3 text-center text-sm">
                        <h6>1</h6>
                    </div>
                    <div className="w-1/3 text-right text-sm">
                        <h6>$55</h6>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex justify-between items-center py-4">
                    <div className="w-1/3 flex items-center gap-4">
                        <img
                            src="list image 2.png"
                            alt="product 2"
                            className="w-16 h-16 object-cover"
                        />
                        <span className="text-sm">Product 2</span>
                    </div>
                    <div className="w-1/3 text-center text-sm">
                        <h6>2</h6>
                    </div>
                    <div className="w-1/3 text-right text-sm">
                        <h6>$88</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};
