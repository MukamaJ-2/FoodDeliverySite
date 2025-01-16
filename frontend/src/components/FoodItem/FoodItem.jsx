
import React, { useContext, useState } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

{/*The Food Item that handles the display for each individual food item*/}
function FoodItem({id, name, price, image}) {


    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt="" />

            {!cartItems[id] ?
                <img src={assets.add_icon_white} onClick={() => addToCart(id)} className="add" />
                :
                <div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)}/>
                    {/*The value of the Itemid displayed*/}
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={() => addToCart(id)}/>
                </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-price">${price*10}</p>
        </div>
    </div>
  )
}

export default FoodItem