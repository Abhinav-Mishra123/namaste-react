import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { CROSS_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [icon, setShowIcon] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const result = await response.json();
            const restaurants = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
        if (searchValue === "") {
            setShowIcon(false);
            setFilteredRestaurant(listOfRestaurants);
        } else {
            setShowIcon(true);
            handleSearch();
        }
    };

    const handleCloseIcon = () => {
        setShowIcon(false);
        setSearchText("");
        setFilteredRestaurant(listOfRestaurants);
    };

    return (
        <div className="body-container">
            <div className="search-box">
                <div className="form-group">
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="search here..."
                        value={searchText}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    ></input>
                    {icon ? (
                        <img
                            src={CROSS_ICON}
                            width={20}
                            height={20}
                            className="cross_icon"
                            onClick={handleCloseIcon}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <button
                className="top-rated"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setFilteredRestaurant(filteredList);
                }}
            >
                Top rated restaurant
            </button>
            <div className="restaurant-section">
                <div className="res-container">
                    {filteredRestaurant.length > 0 ? (
                        filteredRestaurant.map((restaurant) => (
                         <Link to={"restaurants/" + `${restaurant.info.id}`} key={restaurant.info.id}><RestaurentCard  restaurant={restaurant} /></Link>
                        ))
                    ) : (
                        <Shimmer />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
