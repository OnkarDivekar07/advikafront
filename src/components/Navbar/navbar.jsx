import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUserCircle,
  faSearch,
  faHeart,
  faHome,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black p-4 shadow-md">
      {/* Container for consistent width */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="inline-flex items-center p-2 cursor-pointer select-none space-x-2 flex-shrink-0">
          <span
            className="text-white text-[3rem] sm:text-[4rem] leading-none"
            style={{ fontFamily: '"Freestyle Script", cursive' }}
          >
            Advika
          </span>
          <span className="text-[#3DF4A6] font-gotham font-bold text-2xl sm:text-3xl leading-none ml-1">
            Decor
          </span>
        </div>

        {/* Hamburger Toggle (Mobile only) */}
        <button
          className="text-white text-2xl sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 items-center justify-end space-x-6 text-white text-xl">
          {/* Search */}
          <div className="max-w-md w-full mx-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search" className="sr-only">
                Search products
              </label>
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <input
                  id="search"
                  type="search"
                  name="search"
                  placeholder="Search products..."
                  className="w-full py-2 pl-10 pr-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3DF4A6]"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </div>
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button title="Home" onClick={() => navigate('/')} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faHome} />
            </button>
            <button title="Wishlist" onClick={() => navigate('/wishlist')} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button title="Cart" onClick={() => navigate('/cart')} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button title="Profile" onClick={() => navigate('/profile')} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faUserCircle} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden w-full mt-4 px-4 space-y-6 text-white transition-all duration-300">
          {/* Mobile Search */}
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-mobile" className="sr-only">
              Search products
            </label>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <input
                id="search-mobile"
                type="search"
                name="search"
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3DF4A6]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            </div>
          </form>

          {/* Mobile Icons */}
          <div className="flex flex-wrap justify-around gap-4 text-2xl pt-2 border-t border-white/20">
            <button title="Home" onClick={() => { navigate('/'); setMenuOpen(false); }} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faHome} />
            </button>
            <button title="Wishlist" onClick={() => { navigate('/wishlist'); setMenuOpen(false); }} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button title="Cart" onClick={() => { navigate('/cart'); setMenuOpen(false); }} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button title="Profile" onClick={() => { navigate('/profile'); setMenuOpen(false); }} className="hover:text-[#3DF4A6]">
              <FontAwesomeIcon icon={faUserCircle} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
