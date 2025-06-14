// src/components/UserProfileForm.jsx
import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';

export default function UserProfileForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById('profileForm').checkValidity()) {
      alert('Profile saved successfully!');
      setIsEditing(false);
    } else {
      document.getElementById('profileForm').reportValidity();
    }
  };

  return (
    <section className="bg-white rounded-lg p-8 shadow-lg relative">
      <h2 className="section-title">Personal Information</h2>

      <button
        onClick={handleEditToggle}
        className="btn-edit"
        type="button"
        aria-pressed={isEditing}
        aria-label="Edit Profile"
      >
        {isEditing ? 'Cancel' : 'Edit'}
      </button>

      <form id="profileForm" className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput label="First Name" id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} disabled={!isEditing} />
          <FormInput label="Last Name" id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} disabled={!isEditing} />
        </div>

        <FormInput label="Email Address" id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} disabled={!isEditing} />
        <FormInput label="Phone Number" id="phone" type="tel" pattern="^\+?\d{10,15}$" placeholder="+91 9876543210" value={formData.phone} onChange={handleChange} disabled={!isEditing} />
        <FormTextArea label="Address" id="address" placeholder="123, Street Name, City, State, ZIP" value={formData.address} onChange={handleChange} disabled={!isEditing} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormInput label="City" id="city" placeholder="Mumbai" value={formData.city} onChange={handleChange} disabled={!isEditing} />
          <FormInput label="State" id="state" placeholder="Maharashtra" value={formData.state} onChange={handleChange} disabled={!isEditing} />
          <FormInput label="ZIP / Postal Code" id="zip" placeholder="400001" value={formData.zip} onChange={handleChange} disabled={!isEditing} />
        </div>

        {isEditing && (
          <div className="mt-8 flex justify-center">
            <button type="submit" className="btn-primary">Save Changes</button>
          </div>
        )}
      </form>
    </section>
  );
}
