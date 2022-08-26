import { useState } from 'react';
import ItemCategoryList from './ItemCategoryList';

const ItemCategory = () => {
    const [items, setItems] = useState(ItemCategoryList);
    return (
        <>
            
                {
                    items.map((item, itemIndex) => {
                        const { id,title, image, imageTitle, linkTitle, link } = item;
                        return (
                            <div className={ `itemCategory itemCategory${id}`} key={id}>
                                <div className={`item${id}`}>
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
            
        </>
    )
}
export default ItemCategory;