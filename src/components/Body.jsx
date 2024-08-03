import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { CROSS_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [icon, setShowIcon] = useState(false)
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const res = await data.json();
        setListOfRestaurants(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchData();
        // const timer = setTimeout(() => {
        //     fetchData();
            
        // }, 10000);
        // return () => clearTimeout(timer)
    }, []);

    const handleSearch = () =>{
        const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
    }


    const handleChange = (e) =>{
        const searchvalue = e.target.value
        setSearchText(searchvalue)
        handleSearch()
        if(searchvalue === ""){
            setShowIcon(false)
            fetchData()
        }
        else{
            setShowIcon(true)
        }
    }
    

    const handleCloseIcon = ()=>{
        setShowIcon(false)
        setSearchText("")
        fetchData()
    }


    return listOfRestaurants.length == 0 ? (
        <>
       <Shimmer/> 
        </>
    ): (
        <div className="body-container">
            <div className="search-box">
            <div className="form-group">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="search here..."
                    value={searchText} onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            handleSearch()
                        }
                    }}
                ></input>
                { icon ? (<img src={CROSS_ICON} width={20} height={20} className="cross_icon" onClick={handleCloseIcon}/>) : ""}
                </div>
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <button className="top-rated" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
                setFilteredRestaurant(filteredList); // Update filteredRestaurant, not listOfRestaurants
            }}>
                Top rated restaurant
            </button>
            <div className="restaurant-section">
                <div className="res-container">
                    {filteredRestaurant.map((restaurant) => (
                        <RestaurentCard key={restaurant.info.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
