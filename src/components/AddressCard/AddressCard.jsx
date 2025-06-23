//adress card component
import React from 'react';

export default function AddressCard({ address, isSelected, onSelect }) {
  return (
    <div
      className={`border rounded-md p-4 mb-4 cursor-pointer flex justify-between items-center transition-colors ${
        isSelected ? 'border-[#3DF4A6]' : 'border-gray-300 hover:border-[#3DF4A6]'
      }`}
      tabIndex={0}
      role="button"
      aria-label={`Select address for delivery: ${address.fullName}, ${address.address}, ${address.cityState}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div>
        <p className="font-semibold text-black">
          {address.fullName} - <span className="text-gray-700">{address.mobile}</span>
        </p>
        <p className="text-gray-700">
          {address.address}
          {address.landmark ? `, ${address.landmark}` : ''}
        </p>
        <p className="text-gray-700">
          {address.cityState} - {address.pincode}
        </p>
      </div>
      <div>
        <input
          type="radio"
          name="selectedAddress"
          aria-label="Select this address"
          checked={isSelected}
          readOnly
        />
      </div>
    </div>
  );
}
