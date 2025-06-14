import { useState } from "react";
import Button from "../Button/Button";

export default function MobileNumberForm({ onOtpSent }) {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+?\d{7,15}$/;
    if (!phoneRegex.test(mobile.trim())) {
      alert('Please enter a valid mobile number (7 to 15 digits, optional +).');
      return;
    }

    alert(`OTP sent to ${mobile} (simulated). Please check your phone.`);
    if (onOtpSent) onOtpSent(mobile);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mobileNumber" className="block mb-2 font-semibold text-gray-700">
          Enter your mobile number
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="+91 9876543210"
          required
          pattern="^\+?\d{7,15}$"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="input-field w-full text-lg"
          aria-describedby="mobileNote"
          aria-label="Mobile number input"
        />
        <p id="mobileNote" className="text-sm text-gray-500 mt-1">
          We’ll send you a One-Time Password (OTP) to verify your number and continue securely.
        </p>
      </div>

      <Button type="submit">Send OTP</Button>
    </form>
  );
}
