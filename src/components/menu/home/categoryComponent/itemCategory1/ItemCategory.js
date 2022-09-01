import { useState } from 'react';
import ItemCategoryList from './ItemCategoryList';
import "./itemCategory1.css";
const ItemCategory = () => {
    const [items, setItems] = useState(ItemCategoryList);
    return (
        <>
            <div className="itemCategoryDiv">
                {
                    items.map((item, itemIndex) => {
                        const { id,title, image, imageTitle, linkTitle, link } = item;
                        return (
                            <div className={ `itemCategory itemCategory${id}`} key={id}>
                                <div className={`item item${id}`}>
                                <h3>{title} </h3>
                                    <img src={image} alt={imageTitle} className="itemImage" />
                                    {
                                     (id!==4)?
                                            <p><a href={link} >{linkTitle} </a> </p>

                                        :
                                            <button><a href={link} >{linkTitle} </a></button>
                                        
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                </div>
        </>
    )
}
export default ItemCategory;