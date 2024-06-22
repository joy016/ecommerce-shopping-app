'use client';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Card from '@/components/layout/card/Card';
import React from 'react';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const pathname = usePathname();
  return (
    <div className={styles.loginContainer}>
      <Card>
        <h1>Login</h1>
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
              pathname === '/accounts/signup' ? 'active' : ''
            }`}
            href="/accounts/signup"
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
