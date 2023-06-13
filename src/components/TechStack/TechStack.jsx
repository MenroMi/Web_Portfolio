// basic
import Image from 'next/image';

// hooks
import useVisible from '@/hooks/useVisible';

// styles
import styles from '@/styles/TechStack.module.scss';
import { stack } from '@/constants';

import SliderCarousel from '@/components/SliderCarousel/SliderCarousel';
import Slide from '@/components/Slide/Slide';

export default function TechStack() {
  const { value, elemRef } = useVisible();

  return (
    <section
      style={{
        opacity: 1,
        // opacity: `${value ? 1 : 0}`,
        // transition: `${value ? "0.7s all" : ""}`,
      }}
      ref={elemRef}
      id="stack"
      className={styles['stack']}
    >
      <div className={styles['stack__info']}>
        <h2>My Tech Stack</h2>
        <div style={{ overflow: 'hidden', marginTop: '50px' }}>
          <SliderCarousel>
            {stack.map(({ tech, id, pic }) => (
              <Slide key={id} id={id} tech={tech} pic={pic} />
            ))}
          </SliderCarousel>
        </div>
      </div>
    </section>
  );
}
