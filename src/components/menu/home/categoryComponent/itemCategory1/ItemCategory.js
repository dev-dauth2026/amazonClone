import { useState } from 'react';
import ItemCategoryList from './ItemCategoryList';
import "./itemCategory1.css";
import SliderCategory from '../../sliderCategoryComponent/SliderCategory';
import SliderCategory2 from '../../sliderCategoryComponent2/SliderCategory2';
import Item from './Item';
import TodayDealSlider from '../../todayDealSliderComponent/TodayDealSlider';
import Sponsored1 from '../../sponsoredComponent1/Sponsored1';
import ItemCategory3 from '../../itemCategory3/ItemCategory3';
import ItemCategory4Component from '../../itemCategoryComponent4/ItemCategory4Component';
import GrocerySliderCategory from '../../grocerySliderCategoryComponent/GrocerySliderCategory';
import RelatedItemCategory from '../../relatedItemCategoryComponent/RelatedItemCategory';
import CustomerViewed from '../../customerViewedComponent/CustomerViewed';
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
                <ItemCategory3/>
                <GrocerySliderCategory/>
                <RelatedItemCategory/>
                <ItemCategory4Component/>
                <CustomerViewed/>
                
                </div>
        </>
    )
}
export default ItemCategory;