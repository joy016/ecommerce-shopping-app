'use client';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Card from '@/components/layout/card/Card';
import React from 'react';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CardTitle from '@/components/cardtitle/CardTitle';

const Login = () => {
  const pathname = usePathname();
  return (
    <div className={styles.loginContainer}>
      <Card>
        <CardTitle title="Login" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button btnName="Sign in" variant="fullSize" />
        <div className={styles.loginContainer__linkContainer}>
          <Link
            className={`link ${
              pathname === '/accounts/signup' ? 'active' : ''
            }`}
            href="/accounts/signup"
            style={{ fontSize: '12px' }}
          >
            Create an account
          </Link>
          <Link
            className={`link ${
              pathname === '/accounts/forgotpassword' ? 'active' : ''
            }`}
            href="/accounts/forgotpassword"
            style={{ fontSize: '12px', color: '#3A3A3A' }}
          >
            Forgot your password
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
