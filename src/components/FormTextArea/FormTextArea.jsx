// src/components/FormTextArea.jsx
import React from 'react';

export default function FormTextArea({ label, id, placeholder, value, onChange, disabled }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-semibold text-black">{label}</label>
      <textarea
        id={id}
        name={id}
        rows="3"
        className="input-field w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
    </div>
  );
}
