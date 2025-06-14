// src/components/FormInput.jsx
import React from 'react';

export default function FormInput({ label, id, type = "text", placeholder, value, onChange, disabled, pattern }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold text-black">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="input-field w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        pattern={pattern}
        required
      />
    </div>
  );
}
