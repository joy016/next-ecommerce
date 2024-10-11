import Link from 'next/link';
import Menu from './Menu';

import Image from 'next/image';
import { NAVBAR_MENU_BIGSCREEN, STORE_NAME } from '../../../constants/Navbar';
import SearchBox from './SearchBox';
import NavIcons from './NavIcons';

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* for mobile phone */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">{STORE_NAME}</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/ " className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wider">{STORE_NAME}</div>
          </Link>

          <div className="hidden xl:flex gap-4">
            {NAVBAR_MENU_BIGSCREEN.map((menu) => (
              <Link key={menu.label} href={menu.link}>
                {menu.label}
              </Link>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBox />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
