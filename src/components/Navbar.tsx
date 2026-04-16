'use client';

import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  price: number;
  image?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const navlinks = [
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Mens Clothing', href: '/mens' },
  { label: 'Womens Clothing', href: '/womens' },
  { label: 'Kids Clothing', href: '/kid' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateCounts = () => {
      const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const wishlistItems: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

      setCartCount(cartItems.reduce((t, i) => t + (i.quantity || 1), 0));
      setWishlistCount(wishlistItems.length);
    };

    updateCounts();
    window.addEventListener('storage', updateCounts);

    return () => window.removeEventListener('storage', updateCounts);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed z-[999] w-full px-4 py-4 flex justify-between items-center ${
      isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : ''
    }`}>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        {isMenuOpen ? <FaTimes /> : <RiMenu2Line />}
      </button>

      {/* Logo */}
      <Link href="/">
        <Image
          src="https://nishatlinen.com/cdn/shop/files/final_logo_1_nishat-golden.png?v=1691747968"
          alt="logo"
          width={120}
          height={40}
        />
      </Link>

      {/* Mobile Icons */}
      <div className="flex gap-4 lg:hidden">
        <Link href="/wishlist">
          <div className="relative">
            <FaHeart />
            {wishlistCount > 0 && <span>{wishlistCount}</span>}
          </div>
        </Link>

        <Link href="/cart">
          <div className="relative">
            <FaShoppingCart />
            {cartCount > 0 && <span>{cartCount}</span>}
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition lg:hidden`}>
        <div className="p-5 space-y-4">
          {navlinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 items-center">
        {navlinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}

        <Link href="/wishlist"><FaHeart /></Link>
        <Link href="/cart"><FaShoppingCart /></Link>
      </div>

    </div>
  );
};

export default Navbar;
