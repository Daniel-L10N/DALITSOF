'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="text-my_black">
      <div className="bg-gradient-to-l from-my_dark_blue to-my_black h-[350px] w-full flex justify-center items-center flex-col space-y-10">
        <p className="text-2xl md:text-5xl text-white font-extralight">
          START YOUR JOURNEY TODAY
        </p>

        <Link
          className="bg-white rounded-full text-my_dark_blue px-8 py-3 font-extralight text-lg hover:bg-my_yellow transition-all"
          href=""
        >
          SPEAK WITH A FOUNDER
        </Link>
      </div>
      <div className="relative z-10 md:h-[750px] w-full flex flex-col justify-center items-center px-4">
        <div className="static md:absolute z-20 md:-top-10 w-[1400px] max-w-full md:max-w-[95%] md:min-h-[600px] shadow-2xl mx-4 bg-white font-extralight flex flex-col md:flex-row px-4 py-16 md:p-16 gap-16">
          <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-3">
            
            <Link href="/">
              <Image src="" alt="" width={80} height={80} />
            </Link>{' '}
            <p className="text-xl">
              xxxxxxxxx
              <br />
              xxxxxxxxx
              <br />
              xxxxxxxxx
            </p>
            <Link className="text-xl mb-8 font-medium text-my_yellow" href="">
              xxxxxxxxx
            </Link>
            <Link
              className="bg-my_dark_blue px-8 py-3 w-fit rounded-full text-white mb-6 hover:bg-my_yellow transition-all"
              href=""
            >
              CONTACT US
            </Link>
            <p className="text-sm text-center md:text-start">
              xxxxxxxxx
            </p>
            <p className="text-[9px] text-center md:text-start">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              <br />
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              <br />
             xxxxxxxxx
              <br />
              xxxxxxxxx
              <br />
              xxxxxxxxx
              <br />
             xxxxxxxxx
            </p>
          </div>
          <div className="w-full  md:w-1/2 flex flex-col md:flex-row justify-between items-center">
            <ul className="flex flex-col items-center md:items-end gap-8">
              <Link href="/family-office">Family Office</Link>
              <Link href="/wealth-management">Wealth Management</Link>
              <Link href="/family-office/entrepreneurs">Entrepreneurs</Link>
              <Link href="">CEO Founders</Link>
              <Link href="">Catalyst</Link>
              <Link href="">Private Equity Partners</Link>
            </ul>
            <ul className="flex flex-col items-center md:items-end  gap-8">
              <Link href="/about">About Us</Link>
              <Link href="/about/cresset-team">Our Team</Link>
              <Link href="">True Fiduciary®</Link>
              <Link href="/about/rankings-and-awards">Awards</Link>
              <Link href="/about/carrers">Careers</Link>
              <Link href="">Office Locations</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center font-extralight mt-auto py-4 gap-8  md:gap-20 md:h-[120px]">
          <li className="md:hidden block text-xs">xxxxxxxxx</li>
          <ul className="flex justify-center flex-wrap gap-6 md:text-base text-xs">
            <li className="hidden md:block">xxxxxxxxx</li>
            <Link className="hover:text-black transition-all" href="/">
              Terms of Use
            </Link>
            <Link className="hover:text-black transition-all" href="/">
              xxxxxxxxx
            </Link>
            <Link className="hover:text-black transition-all" href="/">
              Privacy Policy and CCPA
            </Link>
            <Link className="hover:text-black transition-all" href="/">
             xxxxxxxxx
            </Link>
            <Link className="hover:text-black transition-all" href="/">
              xxxxxxxxx
            </Link>
          </ul>
          <div className="flex gap-8">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
            <Image src="/twitter.png" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
