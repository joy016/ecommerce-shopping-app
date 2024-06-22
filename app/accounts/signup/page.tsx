'use client';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Card from '@/components/layout/card/Card';
import React from 'react';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CardTitle from '@/components/cardtitle/CardTitle';

const SignUp = () => {
  const pathname = usePathname();
  return (
    <div className={styles.signUpContainer}>
      <Card>
        <CardTitle title="Create A New Account" />
        <Input type="text" name="fullName" placeholder="Full Name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button btnName="SIGN UP" variant="fullSize" />
        <div className={styles.signUpContainer__linkContainer}>
          <p style={{ fontSize: '12px' }}>Already have an Account?</p>
          <Link
            className={`link ${pathname === '/accounts/login' ? 'active' : ''}`}
            href="/accounts/login"
            style={{ fontSize: '12px' }}
          >
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
