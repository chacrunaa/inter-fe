// import Swiper core and required modules
import { Row } from 'react-bootstrap';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.scss';

const SwiperSlider = ({ slides }: { slides: React.ReactNode[] }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[A11y, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <Row className="overflow-hidden w-100 p-3">
        {slides?.map((item, i) => <SwiperSlide key={i}>{item}</SwiperSlide>)}
      </Row>
    </Swiper>
  );
};

export default SwiperSlider;
