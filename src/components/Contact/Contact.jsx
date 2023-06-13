// hook
import useVisible from '@/hooks/useVisible';

import styles from '@/styles/Contact.module.scss';
import { contact } from '@/constants';

export default function Contact() {
  const { value, elemRef } = useVisible();

  return (
    <section
      style={{
        opacity: 1,
        // opacity: `${value ? 1 : 0}`,
        // transition: `${value ? '0.7s all' : ''}`,
      }}
      ref={elemRef}
      id="contact"
      className={styles.contact}
    >
      <h2 className={styles['contact__title']}>Contact Me</h2>
      <div className={styles['contact__list']}>
        {contact.map(({ name, link, id }) => (
          <button key={id}>
            <a target="_blank" href={link}>
              {name}
            </a>
          </button>
        ))}
      </div>
    </section>
  );
}
