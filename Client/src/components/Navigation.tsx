import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-br from-[#615839] via-gray-900 to-black px-6 md:px-28 py-4 flex justify-between items-center relative">
      {/* Left side - Logo and Brand */}
      <div className="flex items-center rounded=full ">
        {/* Logo Image */}
        
        <span className="text-white text-3xl font-semibold ml-3">Zarva</span>
      </div>

      {/* Mobile Menu Button */}
      <div className='text-white'>
        <button className='cursor-pointer' onClick={() => navigate("/Features")}>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </button>
      </div>

      {/* Right side - Authentication Buttons */}
      <div
        className={`absolute md:static top-16 left-4 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:items-center gap-9 p-6 md:p-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:opacity-100 md:translate-y-0'
        }`}
      >
        <Link to="/" className="text-white hover:text-gray-300 text-base font-medium">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;