import { useNavigate } from 'react-router-dom';
import MobileNumberForm from "../../components/MobileNumberForm/MobileNumberForm";
import Navbar from '../../components/Navbar/navbar';
import axios from "axios";
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


export default function CheckoutPage() {
    const navigate = useNavigate();
    const handleOtpSent = async (mobile) => {
  const formatted = formatMobileNumber(mobile);
  console.log("Sending OTP to:", formatted);

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/send-otp`, {
      phone: formatted, // Backend expects `phone` field
    });

    console.log("OTP sent successfully");
    navigate("/verify-otp?mobile=" + encodeURIComponent(formatted));
  } catch (error) {
    console.error("Failed to send OTP:", error.response?.data || error.message);
    alert("Failed to send OTP. Please try again.");
  }
};
  return (
    <>
    <Navbar/>
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">Proceed to Checkout</h1>
      <p className="text-gray-700 mb-6">
        To continue with your purchase, please verify your mobile number.
      </p>
      <MobileNumberForm onOtpSent={handleOtpSent} />
    </main>
    </>
  );
}
