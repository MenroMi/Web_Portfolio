import Button from '@mui/material/Button';

// hook
import useVisible from '@/hooks/useVisible';

import styles from '../../styles/Contact.module.scss';
import { contact } from '@/constants';

export default function Contact() {
  const { value, elemRef } = useVisible();

  return (
    <section
      style={{
        opacity: `${value ? 1 : 0}`,
        transition: `${value ? '0.7s all' : ''}`,
      }}
      ref={elemRef}
      id="contact"
      className={styles.contact}
    >
      <h2 className={styles['contact__title']}>Contact Me</h2>
      <div className={styles['contact__list']}>
        {contact.map(({ name, link, id }) => (
          <Button variant="outlined" key={id}>
            <a target="_blank" href={link}>
              {name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
