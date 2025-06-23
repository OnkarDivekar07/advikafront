import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/navbar';
import AddressCard from '../../components/AddressCard/AddressCard';
import { useNavigate } from 'react-router-dom';

export default function AddressSelectionPage() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    city: '',
    state: '',
    landmark: '',
    houseArea: '',
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;

    const fetchAddresses = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/deliveryAddress`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAddresses(res.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [token]);

  const handleAddressSelect = (id) => {
    setSelectedAddressId(id);
  };

  const handleProceed = () => {
    if (!selectedAddressId) {
      alert('Please select an address.');
      return;
    }
     navigate('/payment');
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/deliveryAddress`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddresses((prev) => [...prev, res.data]);
      setShowForm(false);
      setFormData({
        name: '',
        phone: '',
        pincode: '',
        city: '',
        state: '',
        landmark: '',
        houseArea: '',
      });
    } catch (err) {
      console.error('Failed to add address:', err);
      alert('Failed to save address');
    }
  };

  if (loading) return <p className="text-center">Loading addresses...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Select Delivery Address</h2>

        {addresses.length === 0 && !showForm && (
          <p className="text-center text-gray-500 mb-4">No addresses found. Please add one.</p>
        )}

        {addresses.length > 0 && (
          <div className="space-y-4">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={{
                  fullName: address.name,
                  mobile: address.phone,
                  address: `${address.houseArea}`,
                  cityState: `${address.city}, ${address.state}`,
                  pincode: address.pincode,
                  landmark: address.landmark || '—',
                }}
                isSelected={selectedAddressId === address.id}
                onSelect={() => handleAddressSelect(address.id)}
              />
            ))}
          </div>
        )}

        {!showForm && (
          <div className="mt-6 text-center space-x-4">
            <button
              className="bg-[#3DF4A6] text-black px-6 py-2 rounded hover:bg-[#2dd49e] transition"
              onClick={handleProceed}
              disabled={!selectedAddressId}
            >
              Continue
            </button>

            <button
              className="bg-[#3DF4A6] text-black px-6 py-2 rounded hover:bg-[#2dd49e] transition"
              onClick={() => setShowForm(true)}
            >
              {addresses.length === 0 ? 'Add Address' : 'Add New Address'}
            </button>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Add New Address</h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="houseArea"
                placeholder="House Area / Wasti / village /Locality"
                value={formData.houseArea}
                onChange={handleFormChange}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark (optional)"
                value={formData.landmark}
                onChange={handleFormChange}
                className="border rounded p-2"
              />
            </div>

            <div className="flex justify-start gap-4">
              <button
                type="submit"
                className="bg-[#3DF4A6] text-black px-6 py-2 rounded hover:bg-[#2dd49e]"
              >
                Save Address
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
