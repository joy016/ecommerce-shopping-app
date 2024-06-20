'use client';
import React from 'react';
import headerStyles from './header.module.scss';

import { CiShop, CiSearch } from 'react-icons/ci';
import { IoBagOutline } from 'react-icons/io5';
import { MdOutlinePerson } from 'react-icons/md';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className={headerStyles.headerContainer}>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            <CiShop className={headerStyles.headerContainer__icon} />
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/men' ? 'active' : ''}`}
            href="/men"
          >
            Men
          </Link>
          <Link
            className={`link ${pathname === '/women' ? 'active' : ''}`}
            href="/women"
          >
            Women
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            <CiSearch className={headerStyles.headerContainer__icon} />
          </Link>
          <Link
            className={`link ${pathname === '/bag' ? 'active' : ''}`}
            href="/bag"
          >
            <IoBagOutline className={headerStyles.headerContainer__icon} />
          </Link>
          <Link
            className={`link ${pathname === '/accounts/login' ? 'active' : ''}`}
            href="/accounts/login"
          >
            <MdOutlinePerson className={headerStyles.headerContainer__icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
