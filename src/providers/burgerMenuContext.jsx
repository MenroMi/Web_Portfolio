import { createContext, useState } from 'react';

export const BurgerMenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

const BurgerMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BurgerMenuContext.Provider
      value={{
        isOpen,
        setIsOpen: () => setIsOpen(!isOpen),
      }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};

export default BurgerMenuProvider;
