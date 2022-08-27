import ComponentCategory from './CategoryComponent';
import { useState } from 'react';
import ItemCategoryList from '../itemCategory1/ItemCategoryList';
import SmartScreenList from '../SmartScreenList';
import "./ComponentCategory.css"

const ItemCategoryDiv2 = () => {
    const [ItemCategories, setItemCategories] = useState(ItemCategoryList);
    const [smartScreens, setSmartScreens] = useState(SmartScreenList);
    return (
        <>
            
                {
                    ItemCategories.map((ItemCategory, itemIndex) => {
                        const { id, title, image, imageTitle, link, linkTitle } = ItemCategory;
                        return (
                            <div className="componentCategories" key={id}>
                                <ComponentCategory id={id} title={title} image={image} imageTitle={imageTitle} link={link} linkTitle={linkTitle}>
                                    {
                                        smartScreens.map((smartScreen, screenIndex) => {
                                            const { id, title, image, imageTitle, link, linkTitle } = smartScreen;
                                            return(
                                            
                                            <div className="smartScreenImageDiv" key={id}>
                                                <div className="smartScreenImage">

                                                <img src={image} alt={imageTitle} />
                                                </div>
                                                <p>{title} </p>
                                            </div>
                                            )
                                        })
                                    }
                                    
                                </ComponentCategory>
                            </div>
                        )
                    })
                }
            
        </>
    )
}
export default ItemCategoryDiv2;