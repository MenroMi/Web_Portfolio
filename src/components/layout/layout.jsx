import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import BurgerMenuProvider from '@/providers/burgerMenuContext';
import styles from '@/styles/Home.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <BurgerMenuProvider>
        <Header>
          <Navigation />
        </Header>
        <main className={styles.app}>{children}</main>
      </BurgerMenuProvider>
    </>
  );
};

export default Layout;
