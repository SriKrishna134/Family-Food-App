import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    
    const {cartItem,addToCart,removeFromcart,url} = useContext(StoreContext);

    return (
        <div className='food-items'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={url+"/images/"+image} alt='' />
                {
                !cartItem[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='Add to cart' />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromcart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                         <p>{cartItem[id]}</p>
                         <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;
