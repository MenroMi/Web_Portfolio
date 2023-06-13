// components
import Footer from '../Footer/Footer';
import Me from '../Me/Me';
import About from '../About/About';
import Projects from '../Projects/Projects';
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';

// styles
import styles from '@/styles/Home.module.scss';
import { useContext } from 'react';
import { BurgerMenuContext } from '@/providers/burgerMenuContext';

export default function App() {
  const burgerContext = useContext(BurgerMenuContext);

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
      {burgerContext.isOpen && (
        <div onClick={burgerContext.setIsOpen} className={styles.overlay}></div>
      )}
    </>
  );
}
