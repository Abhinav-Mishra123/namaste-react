import { Thumnail_URL } from "../utils/constants";

const RestaurentCard = ({restaurant}) =>{
    const {name, areaName, cuisines,sla, avgRating, cloudinaryImageId} = restaurant.info;
    return (
          <div className="restaurent-card">
          <div className="food-img">
            <img src={Thumnail_URL +`${cloudinaryImageId}`}/>
          </div>
          <div className="restaurent-name">{name}</div>
          <div className="rating-and-min">
            <div className="rating-con"><img className="ratingimg" src="https://cdn-icons-png.flaticon.com/128/11762/11762443.png"/><span className="rating">{avgRating}</span><span className="delivery-time">{sla.slaString}</span></div>
          </div>
          <div className="cuisines-name">
            {cuisines.join(", ")}
          </div>
          <div className="restaurent-location">
        {areaName}
          </div>
        </div>
    )
  }

  export default RestaurentCard;