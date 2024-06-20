import React from 'react';
import styles from './index.module.scss';

const Input = ({
  type,
  name,
  placeholder,
}: {
  type: 'password' | 'email' | 'text';
  name: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
