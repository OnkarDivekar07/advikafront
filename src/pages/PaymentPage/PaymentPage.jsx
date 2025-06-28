import { useEffect, useState } from "react";
import axios from "axios";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";



export default function PaymentPage() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || order) return;

    const fetchOrCreateDraftOrder = async () => {
      const storedOrderId = localStorage.getItem("orderId");
          console.log(storedOrderId)
      try {
        let res;

        if (storedOrderId) {
          // Try fetching order using orderId
          res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/order/${storedOrderId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (res.data.success && res.data.order.status === "draft") {
            console.log("Fetched order from localStorage ID:", res.data.order);
            setOrder(res.data.order);
            return;
          } else {
            // If order is not a draft, remove it
            localStorage.removeItem("orderId");
          }
        }
const selectedAddressId = localStorage.getItem("selectedAddressId");
        // Fallback: No stored ID or invalid draft -> Create new
        const createRes = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/order`,
          {selectedAddressId},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (createRes.data.success) {
          console.log("Created new draft order:", createRes.data.order);
          setOrder(createRes.data.order);
          localStorage.setItem("orderId", createRes.data.order.id);
        }

      } catch (err) {
        console.error("Error in fetching/creating order:", err);
        localStorage.removeItem("orderId");
        setError("Could not retrieve or create a draft order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrCreateDraftOrder();
  }, [token, order]);

  const handlePayment = async (method) => {
    if (!order) return;

     if (method === "cod") {
  try {
    const orderId = localStorage.getItem("orderId");

    if (!orderId) {
      alert("No order found. Please try again.");
      return;
    }

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/payment/cod`,
      {
        orderId,
        method: "cod",
      },
       {
            headers: { Authorization: `Bearer ${token}` },
          }
    );

    if (response.data.success) {
      localStorage.removeItem("orderId");
      alert("Order placed successfully!");
      navigate("/Sucess");
    } else {
      alert(response.data.message || "Something went wrong. Try again.");
    }
  } catch (err) {
    console.error("COD Order Error:", err);
    alert("Error placing COD order. Please try again.");
  }
    } else {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/payment/create-orderid`,
          {
            orderId: order.id,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { key_id, order: razorOrder } = res.data;

        const options = {
          key: key_id,
          amount: razorOrder.amount,
          currency: "INR",
          name: "Your Company Name",
          description: "Order Payment",
          order_id: razorOrder.id,
          handler: async function (response) {
            try {
              await axios.post(
                `${process.env.REACT_APP_API_URL}/api/payment/verify`,
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              );

              alert("Payment Successful!");
              localStorage.removeItem("orderId");
              localStorage.removeItem("selectedAddressId")
              navigate("/Sucess");
            } catch (err) {
              console.error("Verification failed:", err);
              alert("Payment verification failed.");
            }
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();

        rzp.on("payment.failed", function (response) {
          console.error("Payment failed:", response.error);
          alert("Payment failed. Please try again.");
        });

      } catch (error) {
        console.error("Payment init error:", error);
        alert("Could not start payment process.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-black">Payment</h1>

        {loading ? (
          <p>Loading your draft order...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : !order || !order.orderItems || order.orderItems.length === 0 ? (
          <p className="text-red-500">Your order is empty or could not be created.</p>
        ) : (
          <>
            <OrderSummary orderItems={order.orderItems} />
            <PaymentMethodForm onPayment={handlePayment} />
          </>
        )}
      </main>
    </>
  );
}