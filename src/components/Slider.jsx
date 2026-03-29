import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sliderData } from "../data/sliderData";

const Slider = () => {
  return (
    <section id="sliderType">
      <Swiper navigation={true} modules={[Navigation]} className="dessert_hero">
        {sliderData.map((slide) => (
          <SwiperSlide>
            <div className={`slider_img ${slide.className}`}>
              <div class="desc container">
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <div class="btn">
                  <a href="#">자세히 보기</a>
                  <a href="#" class="brown">
                    사이트 보기
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
