import styles from '@/styles/Project.module.scss';

export default function Project({ name, descr, stack }) {
  return (
    <div className={styles.project}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={styles['icon-folder']}
      >
        <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles['icon-link']}>
        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
      </svg>
      <div className={styles['project__info']}>
        <h3 className={styles['project__info-title']}>{name}</h3>
        <p className={styles['project__info-descr']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam architecto tempora.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul className={styles['project__info-stack']}>
          {stack.map((label) => {
            let bgcColor = '';

            switch (label) {
              case 'React':
                bgcColor = 'rgba(97, 219, 251, 0.3)';
                break;
              case 'Redux':
                bgcColor = 'rgba(118, 74, 188, 0.3)';
                break;
              case 'SCSS':
                bgcColor = 'rgba(179, 115, 153, 0.3)';
                break;
              case 'CSS':
                bgcColor = 'rgba(41, 101, 241, 0.3)';
                break;
              default:
                bgcColor = 'rgba(0,0,0,0.3)';
                break;
            }

            return (
              <li style={{ backgroundColor: bgcColor }} key={label}>
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
