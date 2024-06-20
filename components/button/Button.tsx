'use client';
import React from 'react';
import styles from './index.module.scss';

const Button = ({
  btnName,
  handleClick = () => {},
  variant,
}: {
  btnName: string;
  handleClick?: () => void;
  variant: 'primary' | 'fullSize';
}) => {
  return (
    <button
      className={variant === 'fullSize' ? styles.fullSize : styles.primary}
    >
      {btnName}
    </button>
  );
};

export default Button;
