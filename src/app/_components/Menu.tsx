'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NAVBAR_MENU_SMALL } from '../../../constants/Navbar';
import Link from 'next/link';

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="Menu Picture"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className=" bg-black text-white w-full absolute left-0 top-20 h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10">
          {NAVBAR_MENU_SMALL.map((menu) => (
            <Link key={menu.label} href={menu.link}>
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
