import SmartScreenList from '../SmartScreenList';
import { useState } from 'react';
import ItemCategory2 from './ItemCategory2';
const ComponentCategory = (ItemCategories) => {
    const { id, title, image, imageTitle, link, linkTitle, children } = ItemCategories;
    const [smartScreens, setSmartScreens] = useState(SmartScreenList);


    return (
        <>
            <div className="componentCategoryItem">

                <h3 className="title">{title} </h3>
                <div className="componentCategoryImage">
                    {id === 1 ?
                        <div className="smartScreenDiv" >
                            {children}
                        </div>
                        :
                        <img src={image} alt={imageTitle} />
                    }

                </div>

                <a href={link} className="componentCategoryLink">{linkTitle} </a>

            </div>
        </>
    )
}
export default ComponentCategory;