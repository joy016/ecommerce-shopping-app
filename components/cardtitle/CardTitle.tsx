import React from 'react';
import styles from './index.module.scss';

const CardTitle = ({ title }: { title: string }) => {
  return <h1 className={styles.cardTitle}>{title}</h1>;
};

export default CardTitle;
