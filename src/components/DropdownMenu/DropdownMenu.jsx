import { buttonsArray } from '@/constants';
import { BurgerMenuContext } from '@/providers/burgerMenuContext';
import styles from '@/styles/DropdownMenu.module.scss';
import { useContext } from 'react';

const DropdownMenu = () => {
  const burgerContext = useContext(BurgerMenuContext);

  return (
    <div className={styles.wrapper}>
      {buttonsArray.map(({ label, link, id }) => (
        <div key={id} className={styles['wrapper__cell']}>
          <a onClick={burgerContext.setIsOpen} href={'#' + link}>
            {label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
