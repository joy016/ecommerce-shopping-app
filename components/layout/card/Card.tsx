import React from 'react';

import styles from './index.module.scss';

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default Card;
