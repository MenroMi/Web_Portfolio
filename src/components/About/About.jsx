// basic
import { useEffect } from 'react';

import Image from 'next/image';
import Button from '@mui/material/Button';

import styles from '../../styles/About.module.scss';
import myImg from '../../../public/myImage.jpg';
import useVisible from '@/hooks/useVisible';
import useWindowSize from '@/hooks/useWIndowSize';

export default function About() {
  const { value, elemRef, setRootMargin, rootMargin } = useVisible();
  const {
    windowSize: { width },
  } = useWindowSize();

  // useEffect(() => {
  //   setRootMargin(() => (width > 900 ? '-300px' : width < 360 ? '-10px' : '-40px'));
  // }, [value]);

  return (
    <section
      style={{
        opacity: 1,
      }}
      // style={{
      //   opacity: `${value ? 1 : 0}`,
      //   transition: `${value ? '0.7s all' : ''}`,
      // }}
      // ref={elemRef}
      id="about"
      className={styles.about}
    >
      <Image src={myImg} alt="man" className={styles['main-photo']} />

      <div className={styles.info}>
        <h2 className={styles['info__title']}>About me:</h2>
        <p className={styles['info__descr']}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nisi, harum quod quasi
          officia totam, ut, numquam quaerat rerum fuga deserunt corporis provident qui maiores.
          Quam quos minima doloremque ut? Perspiciatis omnis, nostrum in quae repellendus nihil
          quisquam harum minima optio esse, nisi quas repudiandae laborum soluta, recusandae eos hic
          dolorem! Enim neque modi dolores, commodi iste quasi quidem aliquam!
        </p>

        <Button variant="outlined" className={styles['info__resume']}>
          <a href="https://drive.google.com/u/0/uc?id=1afNEJdZuCEnLMhwQvsE7T9DdDP7vVSU2&export=download">
            Get my Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
