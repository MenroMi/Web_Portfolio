// components
import Footer from '../Footer/Footer';
import Me from '../Me/Me';
import About from '../About/About';
import Projects from '../Projects/Projects';
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';

// styles
import styles from '@/styles/Home.module.scss';
import { use, useContext } from 'react';
import { BurgerMenuContext } from '@/providers/burgerMenuContext';
import useWindowSize from '@/hooks/useWIndowSize';

export default function App() {
  const burgerContext = useContext(BurgerMenuContext);
  const {
    windowSize: { width },
  } = useWindowSize();

  return (
    <>
      <div className={styles.sections}>
        <Me />
        <About />
        <Projects />
        {/* <TechStack /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
      {burgerContext.isOpen && width <= 900 && (
        <div onClick={burgerContext.setIsOpen} className={styles.overlay}></div>
      )}
    </>
  );
}
