import { useState } from "react";
import CustomerViewedList from "./CustomerViewedList";
import './customerViewed.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PersonalizedSignIn from "./PersonalizedSignIn";
const CustomerViewed = () => {
    const [customerViewedItems, setCustomerViewedItems] = useState(CustomerViewedList);
    return (
        <div className="customerViewed">
            <h3>Customers who viewed items in your browsing history also viewed</h3>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={5}
                slidesPerGroup={5}
                navigation
                pagination={{

                    e1: "swiper-pagination",
                    type: "fraction"
                    // formatFractionCurrent(currentNumber),
                    // formatFractionTotal(totalNumber)
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* {formatFractionCurrent} of {formatFractionTotal} */}

                {
                    customerViewedItems.map((customerViewedItem, ItemIndex) => {
                        const { id, img, name, rating, price, delivery, offer } = customerViewedItem;
                        let stars='';
                        for (let i = 0; i < rating; i++) {
                            stars+="⭐";
                        }
                        
                        return (
                            <SwiperSlide>
                                <div className="customerViewedItem" key={id}>
                                    <img src={img} alt={name} />
                                    <h4><a href="">{name}</a> </h4>
                                    <p>{stars}</p>
                                    <p><strong>${price.toFixed(2)} </strong><small>(${price.toFixed(2)}/count)</small></p>
                                    <p><small>Get it as soon as <strong>{delivery}</strong></small></p>
                                    <small>{offer}</small>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <PersonalizedSignIn/>
        </div>
    )
}
export default CustomerViewed;