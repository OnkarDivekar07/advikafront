import React, { useState } from 'react';
import validateForm from '../../utils/validateForm';

export default function AddressForm({ onSave, onCancel, prefill = {} }) {
  const [formData, setFormData] = useState({
    fullName: prefill.fullName || '',
    mobile: prefill.mobile || '',
    pincode: prefill.pincode || '',
    address: prefill.address || '',
    landmark: prefill.landmark || '',
    cityState: prefill.cityState || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      onSave(formData);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      {['fullName', 'mobile', 'pincode', 'address', 'cityState'].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block mb-1 font-semibold text-gray-700">
            {field === 'cityState' ? 'City / State' : field.charAt(0).toUpperCase() + field.slice(1)}
            <span className="text-red-600">*</span>
          </label>
          {field === 'address' ? (
            <textarea
              id={field}
              name={field}
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={formData[field]}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field === 'mobile' ? 'tel' : 'text'}
              id={field}
              name={field}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={formData[field]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div>
        <label htmlFor="landmark" className="block mb-1 font-semibold text-gray-700">
          Landmark (optional)
        </label>
        <input
          type="text"
          id="landmark"
          name="landmark"
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          value={formData.landmark}
          onChange={handleChange}
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-[#3DF4A6] text-black font-bold rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors"
        >
          Deliver Here
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 border border-gray-400 rounded-md hover:border-[#3DF4A6] transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
