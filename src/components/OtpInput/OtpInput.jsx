// components/OtpInput.jsx
import { useEffect, useRef } from "react";

export default function OtpInput({ length = 6, onChange }) {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleInput = (e, idx) => {
    const val = e.target.value;
    if (!/^\d$/.test(val)) {
      e.target.value = "";
      return;
    }

    if (idx < length - 1 && val) {
      inputsRef.current[idx + 1].focus();
    }

    const otp = inputsRef.current.map(input => input.value.trim()).join("");
    onChange(otp);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  return (
    <form autoComplete="one-time-code">
  <div className="flex space-x-2 justify-center">
    {Array.from({ length }).map((_, idx) => (
      <input
        key={idx}
        type="text"
        name={`otp-${idx}`} // gives each input a name, optional
        maxLength="1"
        inputMode="numeric"
        pattern="[0-9]*"
        ref={el => (inputsRef.current[idx] = el)}
        onInput={e => handleInput(e, idx)}
        onKeyDown={e => handleKeyDown(e, idx)}
        className="otp-input w-12 h-12 border border-gray-300 rounded-md text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#3DF4A6]"
        aria-label={`OTP digit ${idx + 1}`}
        autoComplete={idx === 0 ? "one-time-code" : "off"} // only first input
        required
      />
    ))}
  </div>
</form>
  );
}
