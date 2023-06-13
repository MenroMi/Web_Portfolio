import burgerMenuIcon from '@/assets/icons-tech/burger-menu.svg';
import crossMenuIcon from '@/assets/icons-tech/cross.svg';
import iconCSS from '@/assets/icons-technologies/css.svg';
import iconJS from '@/assets/icons-technologies/js.svg';
import iconReact from '@/assets/icons-technologies/react.svg';
import iconRedux from '@/assets/icons-technologies/redux.svg';
import iconTS from '@/assets/icons-technologies/ts.svg';
import iconHTML from '@/assets/icons-technologies/html.svg';
import iconSASS from '@/assets/icons-technologies/sass.svg';
import iconGIT from '@/assets/icons-technologies/git.svg';

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

export const projects = [
  {
    name: 'Project_01',
    descr: 'Short description',
    stack: ['React', 'Next.js', 'CSS'],
    id: 1,
  },
  {
    name: 'Project_02',
    descr: 'Short description',
    stack: ['React', 'Next.js', 'CSS'],
    id: 2,
  },
  {
    name: 'Project_03',
    descr: 'Short description',
    stack: ['React', 'Redux', 'SCSS'],
    id: 3,
  },
  {
    name: 'Project_04',
    descr: 'Short description',
    stack: ['React', 'Redux', 'SCSS'],
    id: 4,
  },
  {
    name: 'Project_05',
    descr: 'Short description',
    stack: ['React', 'Redux', 'SCSS'],
    id: 5,
  },
  {
    name: 'Project_06',
    descr: 'Short description',
    stack: ['React', 'Redux', 'SCSS'],
    id: 6,
  },
];

export const stack = [
  {
    tech: 'JavaScript',
    pic: iconJS,
    id: 1,
  },
  {
    tech: 'TypeScript',
    pic: iconTS,
    id: 2,
  },
  { tech: 'REACT', pic: iconReact, id: 3 },
  { tech: 'REDUX', pic: iconRedux, id: 4 },
  { tech: 'HTML5', pic: iconHTML, id: 5 },
  { tech: 'CSS3', pic: iconCSS, id: 6 },
  { tech: 'SASS', pic: iconSASS, id: 7 },
  { tech: 'GIT', pic: iconGIT, id: 8 },
];

export const settingsForSlider = {
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
