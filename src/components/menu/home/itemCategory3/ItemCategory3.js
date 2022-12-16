import { useState } from "react";
import ItemCategory3List from "./ItemCategory3List";
import './itemCategory3.css';
import Household from "../../../image/household.jpg"
import Household2 from "../../../image/household2.jpg";
import Pet from "../../../image/pet-supply.jpg";
import Baby from "../../../image/baby.jpg";

const ItemCategory3 = () => {
    const [items, setItems] = useState(ItemCategory3List);
    return (

        <div className="ItemCategory3List">
            {
                items.map((item, index) => {
                    const { id, imgtitle, img, link } = item;
                    return (

                        <div className={`itemList item${id}`} key={id}>
                            <h3>{imgtitle} </h3>
                            <img src={img} alt={imgtitle} />
                            <p> <a href="">{link}</a>  </p>
                        </div>

                    )

                })
            }
            <div className="discountCategory">
                <h3>Save 10% with scheduled deliveries</h3>
                <div className="discount">
                    <img src={Household} alt="household" />
                    <p> <a href="">Subscribe & Save</a> </p>
                </div>
                <div className="householdCategory">
                    <div className="hoousehold">
                        <img src={Household2} alt="household2" />
                        <p> <a href="">Household</a> </p>
                    </div>
                    <div className="pet-supply">
                        <img src={Pet} alt="pet" />
                        <p> <a href="">Pet Supply</a> </p>
                    </div>
                    <div className="baby">
                        <img src={Baby} alt="" />
                        <p> <a href="">Baby</a> </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ItemCategory3;