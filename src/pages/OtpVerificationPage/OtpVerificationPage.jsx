import { useState } from "react";
import OtpInput from "../../components/OtpInput/OtpInput";
import Navbar from "../../components/Navbar/navbar";
import { useLocation, useNavigate } from 'react-router-dom';

export default function OtpVerificationPage() {
  const [enteredOtp, setEnteredOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Step 1: Initialize useNavigate

  const queryParams = new URLSearchParams(location.search);
  const mobile = queryParams.get('mobile'); // ✅ Get mobile from URL

  const handleOtpChange = (otp) => {
    setEnteredOtp(otp);
  };

  const verifyOtp = () => {
    if (enteredOtp.length < 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }

    // Simulate backend OTP validation
    const validOtp = "123456"; // Demo OTP

    if (enteredOtp === validOtp) {
      alert("OTP verified successfully! You are now authenticated.");

      // ✅ Step 2: Navigate to AddressSelectionPage
      navigate("/address-selection"); 
      
    } else {
      alert("Invalid OTP. Please try again.");
      setEnteredOtp("");
    }
  };

  const resendOtp = () => {
    alert(`OTP resent to ${mobile} (simulated).`);
    setEnteredOtp("");
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
            className="w-full bg-[#3DF4A6] text-black uppercase font-bold py-3 rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors focus:outline-none focus:ring-4 focus:ring-[#3DF4A6]"
          >
            Verify OTP
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
