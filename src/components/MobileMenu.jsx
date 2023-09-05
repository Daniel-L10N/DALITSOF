import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [aboutBtn, setAboutBtn] = useState(false);
  const [officeBtn, setOfficeBtn] = useState(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setActiveMenu(!activeMenu)} className="space-y-4">
        <div className="w-12 bg-my_yellow h-[2px] rounded"></div>
        <div className="w-12 bg-my_yellow h-[2px] rounded"></div>
      </button>
      {activeMenu && (
        <div className="bg-white w-full absolute z-50 left-0 top-full font-extralight flex flex-col items-center justify-center gap-6 py-8">
          <div className="flex justify-center items-center gap-4 ml-4">
            <Link href="">ABOUT</Link>
            <button onClick={() => setAboutBtn(!aboutBtn)}>
              <Image src="/plus-yellow.png" alt="" width={15} height={15} />
            </button>
          </div>
          {aboutBtn && (
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/about">Our Story</Link>
              <Link href="/about/cresset-team">Team</Link>
              <Link href="/about/rankings-and-awards">Awards</Link>
              <Link href="/about/carrers">Careers</Link>
            </div>
          )}

          <div className="flex justify-center items-center gap-4 ml-4">
            <Link href="">FAMILY OFFICE</Link>
            <button onClick={() => setOfficeBtn(!officeBtn)}>
              <Image src="/plus-yellow.png" alt="" width={15} height={15} />
            </button>
          </div>

          {officeBtn && (
            <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/about">Our Story</Link>
              <Link href="/about/cresset-team">Team</Link>
              <Link href="/about/rankings-and-awards">Awards</Link>
              <Link href="/about/carrers">Careers</Link>
            </div>
          )}

          <Link href="/wealth-management">WEALTH MANAGEMENT</Link>

          <Link href="/network">EVENTS</Link>
          <Link href="/cresset-insights">INSIGHTS</Link>
          <Link
            className="rounded-full py-3 px-8 border-my_yellow border-[1px]"
            href="/contact"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
