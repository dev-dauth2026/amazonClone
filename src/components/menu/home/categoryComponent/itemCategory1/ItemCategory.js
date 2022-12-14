import { useState } from 'react';
import ItemCategoryList from './ItemCategoryList';
import "./itemCategory1.css";
import SliderCategory from '../../sliderCategoryComponent/SliderCategory';
import SliderCategory2 from '../../sliderCategoryComponent2/SliderCategory2';
import Item from './Item';
import TodayDealSlider from '../../todayDealSliderComponent/TodayDealSlider';
import Sponsored1 from '../../sponsoredComponent1/Sponsored1';
const ItemCategory = () => {
    const [items, setItems] = useState(ItemCategoryList);
    return (
        <>
            <div className="itemCategoryDiv">
                {
                    items.map((item, itemIndex) => {
                        return (
                            <Item  {...item} key={item.id}/>
                        )
                    })
                }
                <SliderCategory/>  
                <SliderCategory2/>
                <TodayDealSlider/>
                <Sponsored1/>
                </div>
        </>
    )
}
export default ItemCategory;