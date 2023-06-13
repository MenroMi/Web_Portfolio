// styles
import styles from '@/styles/Header.module.scss';
import { useContext, useEffect, useState } from 'react';
import { BurgerMenuContext } from '@/providers/burgerMenuContext';

export default function Header({ children }) {
  const [scrolling, setScrolling] = useState(false);
  const onCoordScroll = () => {
    return window.scrollY > 80 ? setScrolling(true) : setScrolling(false);
  };
  const burgerContext = useContext(BurgerMenuContext);

  useEffect(() => {
    window.addEventListener('scroll', onCoordScroll);

    return () => window.removeEventListener('scroll', onCoordScroll);
  }, []);

  return (
    <header
      style={{
        zIndex: 99999,
        backgroundColor:
          scrolling || burgerContext.isOpen ? 'rgba(21, 38, 50, 0.8)' : 'rgba(21, 38, 50, 0.1)',
        backdropFilter: 'blur(8px)',
        boxShadow: scrolling && '2px 11px 17px -12px rgba(0, 0, 0, 0.2)',
      }}
      className={styles.header}
    >
      {children}
    </header>
  );
}
