import Image from 'next/image';
import { burgerMenuBtns } from '@/constants';

const onChangeStateBurgerMenu = (state, setFunction) => {
  let actualBtn;

  if (state) {
    actualBtn = burgerMenuBtns[1];
  } else {
    actualBtn = burgerMenuBtns[0];
  }

  const { src, alt, heigth } = actualBtn;
  return (
    <Image
      onClick={setFunction}
      src={src}
      alt={alt}
      style={{ width: '30px', height: heigth, cursor: 'pointer' }}
    />
  );
};

export default onChangeStateBurgerMenu;
