import React from 'react'
import './FoodItem.css';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/currenyFormatter';

export default function FoodItem(foodItem) {

    const addToCartHandler = () => {
        console.log(`Add to cart ${foodItem._id}`);
    }

  return (
    <div className="food-item">
        <div className="food-item__image">
            <Link to={`/foods/${foodItem._id}`}>
                <img src={foodItem.image} alt={foodItem.name} />
            </Link>
        </div>
        <div className="food-item__info">
            <h3>{foodItem.name}</h3>
            <p>{foodItem.description}</p>
            <p>{formatCurrency(foodItem.price)}</p>
        </div>
        <button className='add-to-card' onClick={addToCartHandler}>
            <i className="fas fa-shopping-cart"></i>
            Add To Cart
        </button>

    </div>
  )
}
