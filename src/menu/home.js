import react from 'react';
import ItemCategory from '../components/categoryComponent/ItemCategory';
import ItemCategoryDiv2 from '../components/categoryComponent/ItemCategoryDiv2';


const home = () => {
    return (
        <>
            <div className="homeDiv">
                <div className="itemCategoryDiv">
                    
                   <ItemCategory/>

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