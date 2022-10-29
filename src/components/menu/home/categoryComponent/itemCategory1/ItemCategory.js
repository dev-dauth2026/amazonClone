import { useState } from 'react';
import ItemCategoryList from './ItemCategoryList';
import "./itemCategory1.css";
import SliderCategory from '../../sliderCategoryComponent/SliderCategory';
import Item from './Item';
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
                </div>
        </>
    )
}
export default ItemCategory;