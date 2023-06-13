import Logo from '../Logo/Logo';

// styles
import styles from '@/styles/Navigation.module.scss';
import { buttonsArray } from '@/constants';
import useWindowSize from '@/hooks/useWIndowSize';
import { useContext, useState } from 'react';
import onChangeStateBurgerMenu from '@/utils/navigation/onChangeStateBurgerMenu';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { BurgerMenuContext } from '@/providers/burgerMenuContext';

export default function Navigation() {
  const {
    windowSize: { width },
  } = useWindowSize();
  const burgerContext = useContext(BurgerMenuContext);

  const onChangeViewMenu = (btns) => {
    if (width > 900) {
      return btns.map(({ label, link, id }) => {
        return (
          <button className={styles.btn} key={id} variant="text">
            <a href={`#${link}`}>{label}</a>
          </button>
        );
      });
    } else {
      return onChangeStateBurgerMenu(burgerContext.isOpen, burgerContext.setIsOpen);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles['btn-wrapper']}>{onChangeViewMenu(buttonsArray)}</div>
      </nav>
      {width < 900 && burgerContext.isOpen && <DropdownMenu />}
      {width < 900 && burgerContext.isOpen && <div className={styles.overlay}></div>}
    </>
  );
}
