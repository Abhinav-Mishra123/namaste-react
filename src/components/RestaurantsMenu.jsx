import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useLocation } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    
    if (resInfo === null) {
        return <Shimmer />;
    }
    // console.log(resInfo?.cards[0]?.card?.card.text);

  const { name } = resInfo?.cards[0]?.card?.card.text

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   console.log(itemCards);

    return (
        <>
            <section className="restaurants-menu-section">
                <div className="menu-container">
                    <div className="upper-section">
                    <h1>{resInfo?.cards[0]?.card?.card.text}</h1>
                        <div className="upper-box">
                            
                        </div>
                    </div>
                <div className="menu">
                    <ul>
                        {itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} -{" Rs."}
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RestaurantsMenu;