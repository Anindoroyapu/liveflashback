"use client";

import { useState } from "react";
import type { HeaderProps } from "@/component/type";
import Image from "next/image";
import logo from "@/public/logo.png";

const MENU = [
  { name: "Home", key: "home" },
  { name: "Shop", key: "shop" },
  { name: "Categories", key: "categories" },
  { name: "About Us", key: "about" },
  { name: "Contact", key: "contact" },
];

const Header = ({
  cartCount,
  currentPage,
  setCurrentPage,
  setSelectedCategory,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (page: string) => {
    if (page === "shop") setSelectedCategory(null);
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0B1A3A] py-1.5 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-3 lg:px-6">

        {/* NAV */}
        <nav className="flex items-center justify-between lg:justify-start h-[52px]">

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* LOGO */}
          <div
            className="cursor-pointer lg:mr-6"
            onClick={() => navigate("home")}
          >
            <Image
              src={logo}
              alt="LiveFlashback Logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 mx-auto">
            {MENU.map((item) => (
              <li key={item.key}>
                <a
                  onClick={() => navigate(item.key)}
                  className={`font-medium cursor-pointer pb-1.5 transition-all text-base ${
                    currentPage === item.key
                      ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                      : "text-gray-300 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">

            {/* Login Icon */}
            <svg
              className="w-6 h-6 text-gray-300 hover:text-[#D4AF37] cursor-pointer transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            {/* Cart */}
            <div className="relative cursor-pointer" onClick={() => navigate("cart")}>
              <svg
                className="w-6 h-6 text-gray-300 hover:text-[#D4AF37] transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513A1.875 1.875 0 0018.618 6H6.118a1.875 1.875 0 00-1.838 2.335L6.342 14.25z"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0B1A3A] text-white shadow-xl transition-transform duration-300 z-[999]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-base font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="mt-2">
          {MENU.map((item) => (
            <li
              key={item.key}
              onClick={() => navigate(item.key)}
              className="px-4 py-3 hover:bg-[#11224d] cursor-pointer text-base"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
