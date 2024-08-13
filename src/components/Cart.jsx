import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux/dist/react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=> store.cart.items);

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return(
        <>
        <div className="cart-container">
            <h1>Cart</h1>
            <button
          className="add-btn-cart"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
            <ItemList items={cartItems}/>
        </div>
        
        </>
    )
}

export default Cart;