import react from 'react';
import ItemCategoryDiv2 from '../components/ItemCategoryDiv2';
import ItemCategory from '../ItemCategory';
import Slider from './Slider';

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