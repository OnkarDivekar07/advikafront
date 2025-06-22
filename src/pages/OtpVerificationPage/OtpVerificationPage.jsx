import { useState } from "react";
import OtpInput from "../../components/OtpInput/OtpInput";
import Navbar from "../../components/Navbar/navbar";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const syncCartToBackend = async (token) => {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
     
    const formattedCart = cartItems.map(item => ({
      productId: item.id,
      quantity: item.quantity,
    }));
      
      await axios.post(`${process.env.REACT_APP_API_URL}/api/cart`, {
         cartItems: formattedCart,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
    // Optionally clear local cart after sync
    localStorage.removeItem("cart");
  } catch (error) {
    console.error("Error syncing cart:", error);
    alert("Cart sync failed. You can try again from the cart page.");
  }
};

// Utility function to format mobile number
const formatMobileNumber = (number) => {
  // Remove all spaces and dashes
  const cleaned = number.replace(/\s+/g, '').replace(/-/g, '');

  // If already has '+91', just insert a space after it
  if (cleaned.startsWith('+91')) {
    return `+91 ${cleaned.slice(3)}`;
  }

  // Otherwise, add '+91 ' manually
  return `+91 ${cleaned}`;
};



export default function OtpVerificationPage() {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mobile = queryParams.get('mobile');

  const handleOtpChange = (otp) => {
    setEnteredOtp(otp);
  };

  const verifyOtp = async () => {
    if (enteredOtp.length < 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
const formattedMobile = formatMobileNumber(mobile);
       console.log(formattedMobile)
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/verify-otp`, {
        phone:formattedMobile,
        otp: enteredOtp
      });
      console.log("OTP Verification Response:", response);

      if (response.data.success) {
        alert("OTP verified successfully! You are now authenticated.");
        localStorage.setItem("token", response.data.token);
         await syncCartToBackend(response.data.token);

        navigate("/address-selection");
      } else {
        alert(response.data.message || "Invalid OTP. Please try again.");
        setEnteredOtp("");
      }

    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Server error while verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      const formattedMobile = formatMobileNumber(mobile);
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/send-otp`, { phone: formattedMobile });
      alert(`OTP resent to ${formattedMobile}.`);
      setEnteredOtp("");
    } catch (error) {
      alert("Failed to resend OTP. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-black">OTP Verification</h1>
        <p className="text-gray-700 mb-6">
          Enter the OTP sent to <strong>{mobile}</strong> to continue.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            verifyOtp();
          }}
          className="space-y-6"
        >
          <OtpInput length={6} onChange={handleOtpChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3DF4A6] text-black uppercase font-bold py-3 rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors focus:outline-none focus:ring-4 focus:ring-[#3DF4A6]"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Didn't receive OTP?{" "}
            <button
              type="button"
              onClick={resendOtp}
              className="text-[#3DF4A6] underline focus:outline-none"
            >
              Resend OTP
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
