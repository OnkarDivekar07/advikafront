import { useNavigate } from 'react-router-dom';
import MobileNumberForm from "../../components/MobileNumberForm/MobileNumberForm";
import Navbar from '../../components/Navbar/navbar';
export default function CheckoutPage() {
    const navigate = useNavigate();
    const handleOtpSent = (mobile) => {
        console.log("OTP sent to:", mobile);
        navigate("/verify-otp?mobile=" + encodeURIComponent(mobile));
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
