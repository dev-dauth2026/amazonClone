import { useState } from "react";
import GroceryItemList from "./GroceryItemList";
import './grocerySliderCatergory.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const GrocerySliderCategory = () => {
    const [groceryItemList, setGroceryItemList] = useState(GroceryItemList);
    return (
        <div className="GrocerySliderCategory">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={7}
                slidesPerGroup={7}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    groceryItemList.map((groceryItem, ItemIndex) => {
                        const { id, name, img } = groceryItem;
                        return (
                            <SwiperSlide>
                            <div className="groceryItem" key={id}>
                                <img src={img} alt={name} />
                            </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}
export default GrocerySliderCategory;