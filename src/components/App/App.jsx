// components
import Footer from '../Footer/Footer';
import Me from '../Me/Me';
import About from '../About/About';
import Projects from '../Projects/Projects';
import TechStack from '../TechStack/TechStack';
import Contact from '../Contact/Contact';

// styles
import styles from '@/styles/Home.module.scss';

export default function App() {
  return (
    <>
      <div className={styles.sections}>
        <Me />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <TechStack /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
    </>
  );
}
