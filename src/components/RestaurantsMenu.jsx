import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useLocation } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import { DEALICON } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    
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
  const { avgRating , totalRatingsString, costForTwoMessage , cuisines, outlets } = resInfo?.cards[2]?.card?.card?.info;
  const  dealsforYou = resInfo?.cards[3].card?.card?.gridElements?.infoWithStyle?.offers;

  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
 c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
// console.log(categories);

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   console.log(itemCards);

    return (
        <>
            <section className="restaurants-menu-section">
                <div className="menu-container">
                    <div className="upper-section">
                    <h1>{resInfo?.cards[0]?.card?.card.text}</h1>
                        <div className="upper-box">
                            <div className="rate">
                            <img className="ratingimg" src="https://cdn-icons-png.flaticon.com/128/11762/11762443.png"/>
                            <div className="rating">{avgRating}</div>
                            <div className="morerating">({totalRatingsString}).</div>
                            <div className="fortwo">{costForTwoMessage}</div>
                            </div>
                            <div className="cusines">
                                {cuisines.join(", ")}
                            </div>
                            <div className="outlte-name">
                               <b> Outlet:</b> {resInfo?.cards[2]?.card?.card?.info.labels[1].message}
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="deals-section">
                        <h3>Deals for you</h3>
                        <div className="deals-container">
                        {dealsforYou.map((item, index)=>(
                    <div className="deal-box" key={index}>
                        <div className="deal-content">
                            <div className="offer-img">
                                <img src={DEALICON + `${item.info.offerLogo}`} width={48} height={48}/>
                            </div>
                            <div className="right-content">
                                <p className="headeroffer">{item.info.header}</p>
                                <p className="offerdesc">{item.info.description}</p>
                            </div>
                        </div>
                    </div>

                        ))}
                        </div>
                </div>
                <div className="recommended-section">
                        {categories.map((category, index)=>(
                            <RestaurantCategory 
                            key={category?.card?.card.title} 
                            data={category?.card?.card}
                            showItems={index === showIndex ? true : false}
                            setShowIndex={()=> setShowIndex(index)}
                            />
                        ))}
                </div>
            </section>
        </>
    );
};

export default RestaurantsMenu;
