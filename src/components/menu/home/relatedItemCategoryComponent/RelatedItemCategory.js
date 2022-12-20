import { useState } from "react";
import RelatedItemList from "./RelatedItemList";
import './relatedItemCategory.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const RelatedItemCategory = () => {
    const [relatedItems, setRelatedItem] = useState(RelatedItemList);
    return (
        <div className="relatedItemCategory">
        <h3>Related to items you've viewed</h3>
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
                    relatedItems.map((relatedItem, itemIndex) => {
                        const { id, name, img } = relatedItem;
                        return (
                            <SwiperSlide>
                            <div className="relatedItem" key={id}>
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
export default RelatedItemCategory;