import React from "react";
import { DEALICON } from "../utils/constants";
import { useDispatch } from "react-redux/dist/react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{

    const dispatch = useDispatch(); 


    function handleItemsCards(item){
        dispatch(addItem(item))
    }

    return (
        <>
        {items.map((item)=>(
        <div className="main-content" key={item.card.info.id}>
            <div className="recipe-left">
              <div className="recipe-name">{item.card.info.name}</div>
              <div className="recipe-price">₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}</div>
              <div className="recipe-rating">
                <img
                  className="ratingimg"
                  src="https://cdn-icons-png.flaticon.com/128/11762/11762443.png"
                />
                <div className="avg-rating">{item.card.info.ratings.aggregatedRating.rating}</div>
                <div className="total-rating">({item.card.info.ratings.aggregatedRating.ratingCountV2})</div>
              </div>
              <div className="recipe-description">
                <p>
                {item.card.info.description}
                </p>
              </div>
            </div>
            <div className="recipe-right">
                <buttton className="add-btn" onClick={()=> handleItemsCards(item)}>Add</buttton>
                <div className="recipe-image">
                {item.card.info.imageId ? (
                        <img src={`${DEALICON}${item.card.info.imageId}`} alt="Recipe" />
                    ) : (
                        <h1>Image not available</h1>
                    )}
                </div>
            </div>
          </div>

        ))}
        </>
    )
}


export default ItemList;