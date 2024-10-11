'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  /* for temp. */
  const isLoggedIn = false;

  const handleProfile = () => {
    if (isLoggedIn) {
      router.push('/login');
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt="profile image"
        className="cursor-pointer"
        onClick={handleProfile}
      />
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="notification image"
        className="cursor-pointer"
      />
      <div className="relative">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt="cart image"
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pinkColor rounded-full flex justify-center text-white">
          1
        </div>
      </div>
      {isCartOpen && <CartModal />}

      {isProfileOpen && (
        <div className="absolute top-12 left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 z-20 text-sm rounded-md bg-white text">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">
            {isLoading ? 'Logging out' : 'Logout'}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
