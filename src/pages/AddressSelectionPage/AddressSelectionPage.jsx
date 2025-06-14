import React, { useState } from 'react';
import AddressList from '../../components/AddressList/AddressList';
import AddressForm from '../../components/AddressForm/AddressForm';
import Navbar from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';

export default function AddressSelectionPage() {
  const navigate = useNavigate();
  const userExists = true;
  const initialAddresses = [
    {
      id: 1,
      fullName: 'John Doe',
      mobile: '+91 9876543210',
      pincode: '400001',
      address: '123 Main Street',
      landmark: 'Near City Mall',
      cityState: 'Mumbai, Maharashtra',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      mobile: '+91 9123456789',
      pincode: '560001',
      address: '456 Park Avenue',
      landmark: '',
      cityState: 'Bangalore, Karnataka',
    },
  ];

  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedId, setSelectedId] = useState(initialAddresses[0]?.id || null);
  const [showForm, setShowForm] = useState(!userExists || addresses.length === 0);

  const handleAddAddress = (newAddr) => {
    const newAddress = { ...newAddr, id: Date.now() };
    setAddresses([...addresses, newAddress]);
    alert('Address added successfully!');
    setShowForm(false);
    setSelectedId(newAddress.id);
  };

  const handleDeliverHere = () => {
    const selectedAddr = addresses.find((a) => a.id === selectedId);
    if (!selectedAddr) {
      alert('Please select an address to continue.');
      return;
    }
    alert(
      `Delivering to:\n${selectedAddr.fullName}\n${selectedAddr.address}, ${selectedAddr.cityState} - ${selectedAddr.pincode}`
      
    );
    navigate("/payment");
    // Proceed to next step
  };

  return (
    <>
    <Navbar/>
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">Delivery Address</h1>

      {showForm ? (
        <AddressForm onSave={handleAddAddress} onCancel={() => setShowForm(false)} />
      ) : (
        <>
          <AddressList addresses={addresses} selectedId={selectedId} onSelect={setSelectedId} />

          <button
            onClick={() => setShowForm(true)}
            className="mb-6 px-4 py-2 bg-[#3DF4A6] text-black font-bold rounded-md hover:bg-black hover:text-[#3DF4A6] btn-hover-glow transition-colors"
          >
            Add New Address
          </button>

          <button
            onClick={handleDeliverHere}
            className="w-full px-4 py-3 bg-black text-white font-bold rounded-md hover:bg-[#3DF4A6] hover:text-black btn-hover-glow transition-colors"
          >
            Deliver Here
          </button>
        </>
      )}
    </main>
    </>
  );
}
