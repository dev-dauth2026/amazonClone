import react from 'react';
import ItemCategory2 from './categoryComponent/itemCategory2/ItemCategory2';
import ItemCategory from './categoryComponent/itemCategory1/ItemCategory';
import Slider from './slider/Slider';
import "./home.css";
const home = () => {
    return (
        <>
            <div className="homeDiv">
                    <Slider />            
                    <ItemCategory />            
                    {/* <ItemCategory2/> */}   
                       
            </div>
        </>
    )
}
export default home;