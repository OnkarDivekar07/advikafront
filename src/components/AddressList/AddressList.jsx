import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

export default function AddressList({ addresses, selectedId, onSelect }) {
  return (
    <div className="mb-6">
      {addresses.map((addr) => (
        <AddressCard
          key={addr.id}
          address={addr}
          isSelected={selectedId === addr.id}
          onSelect={() => onSelect(addr.id)}
        />
      ))}
    </div>
  );
}
