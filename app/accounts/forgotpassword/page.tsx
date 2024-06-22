import Button from '@/components/button/Button';
import CardTitle from '@/components/cardtitle/CardTitle';
import Input from '@/components/input/Input';
import Card from '@/components/layout/card/Card';
import styles from './index.module.scss';
import React from 'react';

const ForgotPassword = () => {
  return (
    <div className={styles.forgotPasswordContainer}>
      <Card>
        <CardTitle title="Enter your email address" />
        <Input type="email" name="email" placeholder="Email" />
        <Button btnName="RESET PASSWORD" variant="fullSize" />
      </Card>
    </div>
  );
};

export default ForgotPassword;
