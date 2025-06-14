// components/PaymentMethodForm.jsx
export default function PaymentMethodForm({ onPayment }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedMethod = e.target.paymentMethod.value;
      onPayment(selectedMethod);
    };
  
    return (
      <section>
        <h2 className="text-xl font-semibold mb-4 text-black">Select Payment Method</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="space-y-4 border border-gray-300 rounded-md p-4">
            <legend className="sr-only">Payment Methods</legend>
  
            {["cod", "upi", "card", "wallet"].map((method) => (
              <label key={method} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  defaultChecked={method === "cod"}
                  className="form-radio text-[#3DF4A6]"
                />
                <span className="text-black font-semibold">
                  {method === "cod"
                    ? "Cash on Delivery (COD)"
                    : method === "upi"
                    ? "UPI"
                    : method === "card"
                    ? "Credit/Debit Card"
                    : "Wallet"}
                </span>
              </label>
            ))}
          </fieldset>
  
          <button
            type="submit"
            className="w-full bg-[#3DF4A6] text-black uppercase font-bold py-4 rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors focus:outline-none focus:ring-4 focus:ring-[#3DF4A6] flex items-center justify-center gap-2"
          >
            Pay Now / Place Order
          </button>
        </form>
      </section>
    );
  }
  