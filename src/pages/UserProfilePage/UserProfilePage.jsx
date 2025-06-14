// src/pages/UserProfilePage.jsx
import React from 'react';
import UserProfileForm from '../../components/UserProfileForm/UserProfileForm';
import Navbar from '../../components/Navbar/navbar';

export default function UserProfilePage() {
  return (
    <>
    <Navbar />
    <main className="max-w-4xl mx-auto p-8 relative">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">User Profile</h1>
      <UserProfileForm />
    </main>
    </>
  );
}
