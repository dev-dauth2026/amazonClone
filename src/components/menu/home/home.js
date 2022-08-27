import react from 'react';
import ItemCategoryDiv2 from './categoryComponent/ItemCategoryDiv2';
import ItemCategory from './categoryComponent/ItemCategory';
import Slider from './slider/Slider';
import "./home.css";
const home = () => {
    return (
        <>
            <div className="homeDiv">
                <div className="itemCategoryDiv">
                    <ItemCategory />
                </div>
                {/* <div className="sliderDiv">
                    <Slider />
                </div> */}
                <div className="itemCategoryDiv2">
                    <ItemCategoryDiv2/>
                </div>
            </div>

        </>
    )
}
export default home;