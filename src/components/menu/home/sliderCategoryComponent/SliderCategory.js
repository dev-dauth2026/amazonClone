import { useState } from "react";
import "./sliderCategory.css";
import SliderItem from "./SliderItem";
import SliderItemList from "./SliderItemList";
import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCategory = () => {
    const [sliderItems, setSliderItems] = useState(SliderItemList);
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
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        swipeToSlide: true,
        dots:true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    swipeToSlide: true,
                    dots:true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    swipeToSlide: true,
                    dots:true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    dots:true,
                }
            }
        ]
    };

    return (
        <div className="sliderCategory">
        <h2 className="sliderCategory1">Trending Items for International markets</h2>
            
                <Slider {...settings}>
                    {
                        sliderItems.map((sliderItem, itemIndex) => {
                            const   { id, title, image, imageTitle, linkTitle, link } = sliderItem;     


                            return (
                                <>
                                    <div key={id} className='sliderItem'>
                                        <img src={image} alt={imageTitle} />
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
        

            {/* <FaChevronLeft className="arrow leftArrow" onClick={prevBtn}
             />
            <FaChevronRight className="arrow rightArrow" onClick={nextBtn} /> */}


        </div>

    )
}
export default SliderCategory;