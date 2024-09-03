import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useResMenu from "../utils/useResMenu";


const ResMenu = () => {

    const {ResId} = useParams();
    const ResInfo = useResMenu(ResId);

    if(ResInfo == 0){
        return (
        <Shimmer/>
        );
    };
    const {name, cuisines, costForTwoMessage} = ResInfo?.cards[2]?.card?.card?.info;
    console.log(name);
    const { itemCards } = 
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="reitemCards">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            {/* <ul>
                {
                itemCards.map((item )=>( 
                <li key={item.card.info.id}>
                {item.card.info.name} - {" Rs."}
                {item.card.info.price/100 || item.card.info.defaultprice/100}
                </li>
                ))}
            </ul> */itemCards ? (
  <ul>
  {itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} - {" Rs."}
      {item.card.info.price / 100 || item.card.info.defaultprice / 100}
    </li>
  ))}
</ul>   

) : (
<p>Loading menu items...</p>
)}
        </div>
    );
};


export default ResMenu;