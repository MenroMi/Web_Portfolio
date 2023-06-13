import burgerMenuIcon from '@/assets/icons-tech/burger-menu.svg';
import crossMenuIcon from '@/assets/icons-tech/cross.svg';

export const contact = [
  { name: 'E-mail', link: 'mailto:k.shchasny@gmail.com', id: 1 },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/kiryl-shchasny-5b40a81b2/',
    id: 2,
  },
  { name: 'GitHub', link: 'https://github.com/MenroMi', id: 3 },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100010338481544',
    id: 4,
  },
];

export const buttonsArray = [
  { label: 'About', link: 'about', id: 1 },
  { label: 'Projects', link: 'projects', id: 2 },
  { label: 'My stack', link: 'stack', id: 3 },
  { label: 'Contacts', link: 'contact', id: 4 },
];

export const burgerMenuBtns = [
  {
    label: 'burger-menu',
    src: burgerMenuIcon,
    alt: 'burger menu',
    heigth: '30px',
  },
  {
    label: 'cross',
    src: crossMenuIcon,
    alt: 'close menu',
    heigth: '35px',
  },
];
