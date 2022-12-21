import { useState } from "react";
import SmartSolutionList from "./SmartSolutionList";
import ItemCategory4List from "./ItemCategory4List";
import './itemCategory4Component.css';
const ItemCategory4Component = () => {
    const [smartItems, setSmartItems] = useState(SmartSolutionList);
    const [category4Items, setCategory4Items] = useState(ItemCategory4List);
    return (
        <div className="itemCategory4Component">
            <div className="smartSolutionItems">
                <h3>Smart Solution for your home</h3>
                <div className="smartItemDiv">
                    {
                        smartItems.map((smartItem, ItemIndex) => {
                            const { id, name, img } = smartItem;
                            return (
                                <div className="smartItem" key={id}>
                                    <img src={img} alt={name} />
                                    <p>{name} </p>
                                </div>
                            )
                        })
                    }
                </div>
                <p> <a href="">Explore all</a></p>
            </div>
            <div className="Category4Items">
                {
                    category4Items.map((category4Item, Item4Index) => {
                        const { id, name, img, link, discount } = category4Item;
                        return (
                            <div className="category4Item" key={id}>
                                <h3>{name} </h3>
                                <img src={img} alt={name} />
                                <p className="discount"><span style={{backgroundColor:'#c50303',color:'white',padding: '2px 5px',borderRadius: '5px'}}>{discount} </span> </p>
                                <p><a href="">{link} </a> </p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default ItemCategory4Component;