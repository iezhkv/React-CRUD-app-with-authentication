import React from 'react'
import { useParams } from 'react-router-dom'
import { FoodsContext } from '../../contexts/FoodContext'
import { useContext } from 'react'

import './SingleFood.css'


export default function SingleFood() {
    const { id } = useParams();
    const { foods } = useContext(FoodsContext);
    const food = foods.find((food) => food._id === id);
    console.log(food);
  return (
    <div className='main'>
        <h2 className='food-name'>{food.name}</h2>
        <div className='main-image'>
         <img  src={food.image} alt={food.name} />
        </div>
        <p>{food.price}</p>
        <p>{food.description}</p>
        <p>{food.cookTime}</p>
        
    </div>
  )
}
