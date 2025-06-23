import { useEffect, useState } from "react";
import axios from "axios";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setError("You need to login first.");
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("cart fetch response" ,res.data)
        setCartItems(res.data || []);
      } catch (err) {
        console.error("Failed to fetch cart", err);
        setError("Failed to fetch cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  const handlePayment = (method) => {
    if (method === "cod") {
      alert("Order placed successfully with Cash on Delivery.");
      navigate("/order-success"); // if you have a success page
    } else {
      alert(`Redirecting to payment gateway for ${method.toUpperCase()} (simulated).`);
      // redirect to payment gateway logic
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-black">Payment</h1>

        {loading ? (
          <p>Loading your summary...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : cartItems.length === 0 ? (
          <p className="text-red-500">Your cart is empty.</p>
        ) : (
          <>
            <OrderSummary cartItems={cartItems} />
            <PaymentMethodForm onPayment={handlePayment} />
          </>
        )}
      </main>
    </>
  );
}
