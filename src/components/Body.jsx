import resData from "../utils/mockData";
import { useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () =>{
    const [listofRestaurent, setListOfRestaurent] = useState(resData);
    return (
      <div className="body-container">
        <div className="search-box">
          <input type="text" placeholder="search here..."></input>
          <button className="search-btn">Search</button>
        </div>
        <button className="top-rated" onClick={()=> {const filteredList = listofRestaurent.filter((res)=>  res.info.avgRating > 4.2);
        setListOfRestaurent(filteredList)
        }}>Top rated restaurent</button>
        <div className="restaurent-section">
          <div className="res-container">
          {listofRestaurent.map((restaurant)=>(
          <RestaurentCard key={restaurant.info.id} restaurant={restaurant}/>
          ))}
          </div>
        </div>
      </div>
    )
  }
  export default Body;