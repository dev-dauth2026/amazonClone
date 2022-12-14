import { useState } from "react";
import "./sliderCategory2.css";
import SliderItem from "../sliderCategoryComponent/SliderItem";
import SliderItemList2 from "../sliderCategoryComponent2/SliderItemList2";
import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderCategory2 = () => {
  const [sliderItems, setSliderItems] = useState(SliderItemList2);
  // let box = document.querySelector('.sliderCategoryList');

  // const prevBtn = () => {
  //     let width = box.clientWidth;
  //     box.scrollLeft = box.scrollLeft - width;
  //     console.log(width);
  //     console.log(box.scrollLeft);
  // }
  // const nextBtn = () => {
  //     let width = box.clientWidth;
  //     box.scrollLeft = box.scrollLeft + width;
  //     console.log('rightbtn')
  //     console.log(box.scrollLeft)
  // }
  // const settings = {
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 7,
  //     slidesToScroll: 7,
  //     initialSlide: 0,
  //     swipe:true,
  //     scroll:true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   };

  return (
    <div className="sliderCategory2">
    <h3>Frequently repurchased in Beauty and Personal care</h3>
      <div className="sliderCategoryList2">
        {/* <Slider {...settings}> */}
        <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={7}
              slidesPerGroup= {7}
              navigation
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
        >
          {
            sliderItems.map((sliderItem, itemIndex) => {
              const { id, title, image, imageTitle, linkTitle, link } = sliderItem;
              return (
                <>
                  <SwiperSlide>
                    <div key={id} className='sliderItem2'>
                      <img src={image} alt={imageTitle} />
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
        {/* </Slider> */}
      </div>

      {/* <FaChevronLeft className="arrow leftArrow" onClick={prevBtn}
      />
      <FaChevronRight className="arrow rightArrow" onClick={nextBtn} /> */}

    </div>
  )
}
export default SliderCategory2;