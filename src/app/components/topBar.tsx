'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 whitespace-nowrap">
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Email - Hidden on small screens */}
          <a
            href="mailto:ayesha@gmail.com"
            className="hidden sm:flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span className="hidden md:inline">ayesha@gmail.com</span>
          </a>
          {/* Phone - Hidden on small screens */}
          <a
            href="tel:1234567890"
            className="hidden sm:flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span className="hidden md:inline">(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {/* Language Dropdown */}
            {languageDropdown && (
              <div className="absolute top-full left-0 bg-white text-black mt-1 p-2 rounded shadow-lg">
                <div className="cursor-pointer hover:bg-gray-100 p-1">English</div>
                <div className="cursor-pointer hover:bg-gray-100 p-1">Spanish</div>
                <div className="cursor-pointer hover:bg-gray-100 p-1">French</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {/* Currency Dropdown */}
            {currencyDropdown && (
              <div className="absolute top-full left-0 bg-white text-black mt-1 p-2 rounded shadow-lg">
                <div className="cursor-pointer hover:bg-gray-100 p-1">USD</div>
                <div className="cursor-pointer hover:bg-gray-100 p-1">EUR</div>
                <div className="cursor-pointer hover:bg-gray-100 p-1">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <div className="flex items-center gap-2 hover:text-gray-200">
            <Link href="/account">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;