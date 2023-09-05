'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../components/MobileMenu';
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentHovered, setCurrentHovered] = useState(0);
  const handleMouseEnter = (curr) => {
    setIsHovered(true);
    setCurrentHovered(curr);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentHovered(0);
  };
  return (
    <header className="flex justify-between items-center px-6 w-[1400px] max-w-full h-28 text-my_black m-auto relative">
      <div className="">
        {' '}
        <Link href="/">
          <Image src="/logo.jpeg" alt="" width={800} height={150} />
        </Link>{' '}
      </div>
      <ul className="hidden lg:flex justify-between items-center gap-10 font-light">
        <Link
          className="relative hover:text-my_yellow transition-all hover:underline"
          href="/about"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          ABOUT{' '}
          {isHovered && currentHovered === 1 && (
            <div className="absolute flex flex-col z-50 bg-white w-[200px] py-4 px-4 text-lg  rounded-xl shadow-xl">
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/about"
              >
                Our Story{' '}
                <Image src="/play.png" alt="" width={10} height={15} />{' '}
              </Link>
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/about/cresset-team"
              >
                Team <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/about/rankings-and-awards"
              >
                Awards <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
              <Link
                className=" text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/about/carrers"
              >
                Careers <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
            </div>
          )}
        </Link>

        <Link
          className="relative hover:text-my_yellow transition-all hover:underline"
          href="/family-office"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          FAMILY OFFICE
          {isHovered && currentHovered === 2 && (
            <div className="absolute flex flex-col z-50 bg-white w-[200px] py-4 px-4 text-lg  rounded-xl shadow-xl">
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/family-office"
              >
                UHNW Families{' '}
                <Image src="/play.png" alt="" width={10} height={15} />{' '}
              </Link>
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/family-office/entrepreneurs"
              >
                Founders & Entrepreneurs{' '}
                <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
              <Link
                className="border-b-[1px] text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/family-office/cresset-catalyst"
              >
                Early Founders{' '}
                <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
              <Link
                className=" text-right px-4 flex items-center justify-end gap-1 py-3 transition-all hover:bg-slate-100 text-black"
                href="/family-office/true-cresset-sports-entertainment"
              >
                Pro Athletes & Entertainers{' '}
                <Image src="/play.png" alt="" width={10} height={15} />
              </Link>
            </div>
          )}
        </Link>
        <Link
          className="hover:text-my_yellow transition-all hover:underline"
          href="/wealth-management"
        >
          WEALTH MANAGEMENT
        </Link>
        <Link
          className="hover:text-my_yellow transition-all hover:underline"
          href="/network"
        >
          EVENTS
        </Link>
        <Link
          className="hover:text-my_yellow transition-all hover:underline"
          href="/cresset-insights"
        >
          INSIGHTS
        </Link>

        <Link
          className="rounded-full border-[1px] border-my_yellow px-8 py-1 transition-all hover:bg-my_yellow hover:text-white"
          href="/contact"
        >
          CONTACT US
        </Link>
      </ul>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
