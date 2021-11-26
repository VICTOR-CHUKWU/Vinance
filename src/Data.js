import { RiCustomerService2Fill, RiNewspaperFill } from 'react-icons/ri';
import { BsFillChatRightTextFill, BsPeopleFill } from 'react-icons/bs';
import display1 from './img/display-1.jpg';
import display2 from './img/display-2.jpg';
import display3 from './img/display-3.png';
import display4 from './img/display-4.jpg';

export const displayDta = [
  {
    key: 1,
    img: display1,
  },
  {
    key: 2,
    img: display2,
  }, {
    key: 3,
    img: display3,
  }, {
    key: 4,
    img: display4,
  },
];

export const getInTouchData = [
  {
    key: 1,
    icon: <RiCustomerService2Fill />,
    text: 'Got a problem? Get in touch with our customer care',
    title: '24/7 support',
  },
  {
    key: 2,
    icon: <RiNewspaperFill />,
    text: 'news and updates from world leading cryptocurrency industries',
    title: 'Vinance blog',
  },
  {
    key: 3,
    icon: <BsFillChatRightTextFill />,
    text: 'we are global, join our community',
    title: 'community',
  },
  {
    key: 4,
    icon: <BsPeopleFill />,
    text: 'Help us build the future of technology, start your career with us',
    title: 'carreers',
  },

];

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
