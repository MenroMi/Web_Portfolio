import Image from 'next/image';
import myImg from '../../../public/myImage.jpg';

import styles from '../../styles/Me.module.scss';
import useTyped from '@/hooks/useTyped';
import useWindowSize from '@/hooks/useWIndowSize';

export default function Me() {
  const { txt } = useTyped();
  const {
    windowSize: { width },
  } = useWindowSize();

  return (
    <section className={styles.me}>
      <div className={styles.info}>
        <div id={styles['txt-type-dyn']}>
          {txt} <span></span>
        </div>
        <div className={styles['info__pos']}>
          FRONT<span>-</span>END
          {width > 578 ? <br /> : ' '}
          DEVELOPER
        </div>
        <div className={styles['info__descr']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt maxime sint rem
          facere, ducimus ipsam ipsa eos numquam temporibus esse? Dicta vitae eligendi, deleniti non
          animi veritatis natus quas?
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles['image__bg']}></div>
        <Image src={myImg} alt="man" className={styles['main-photo']} />
      </div>
    </section>
  );
}
