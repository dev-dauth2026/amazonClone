
import { useState } from "react";
import './todayDealSlider.css';
import TodayDealItemList from "./TodayDealItemList";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const TodayDealSlider = () => {
    const [itemList, setItemList] = useState(TodayDealItemList);
    return (
        <>
            <div className="TodayDealSlider">
                <h3>Today's Deal</h3>
                <div className="TodayDealSliderList">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        navigation
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            itemList.map((todaydealItem, Index) => {
                                const { id, imgTitle, img, discount } = todaydealItem;
                                return (
                                    <>
                                    <SwiperSlide>
                                    <div className="TodayDealSliderItem" key={id}>

                                        <img src={img} alt={imgTitle} />
                                        <div className="deal">
                                        <p ><span className="discount">Up to {discount}% off</span></p>
                                        <p className="top-deal">Top deal</p>
                                        </div>
                                        <p>Select {imgTitle}. Discount applied in prices displayed.</p>
                                    </div>
                                    </SwiperSlide>
                                    </>
                                )

                            })
                        }
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default TodayDealSlider;
