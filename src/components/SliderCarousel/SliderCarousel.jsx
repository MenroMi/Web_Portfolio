import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { settingsForSlider } from '@/constants';

const SliderCarousel = ({ children }) => {
  return <Slider {...settingsForSlider}>{children}</Slider>;
};

export default SliderCarousel;
