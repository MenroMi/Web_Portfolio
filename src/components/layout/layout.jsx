import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

import styles from '@/styles/Home.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className={styles.app}>{children}</main>
    </>
  );
};

export default Layout;
