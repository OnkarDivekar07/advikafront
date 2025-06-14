// pages/PaymentPage.jsx
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
import Navbar from "../../components/Navbar/navbar";

export default function PaymentPage() {
  // Sample cart items (replace with real data later)
  const cartItems = [
    {
      id: 1,
      name: "Velvet Pink Steering Wheel Sleeves",
      price: 19.99,
      quantity: 2,
      image: "https://storage.googleapis.com/a1aa/image/d6c2beed-28c0-476c-0ac2-17af87ea2e41.jpg",
    },
    {
      id: 2,
      name: "Pink Seat Covers",
      price: 29.99,
      quantity: 1,
      image: "https://storage.googleapis.com/a1aa/image/719b9f61-2aa3-4f4e-c983-a4be6355bc9a.jpg",
    },
  ];

  const handlePayment = (method) => {
    if (method === "cod") {
      alert("Order placed successfully with Cash on Delivery.");
    } else {
      alert(`Redirecting to payment gateway for ${method.toUpperCase()} (simulated).`);
      
    }
  };

  return (
    <>
    <Navbar/>
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">Payment</h1>

      <OrderSummary cartItems={cartItems} />
      <PaymentMethodForm onPayment={handlePayment} />
    </main>
    </>
  );
}
