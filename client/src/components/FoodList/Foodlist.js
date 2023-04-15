import React, { useState } from 'react';
import FoodItem from './FoodItem/FoodItem';
import './FoodList.css';

export default function FoodList({ foods }) {
  const [query, setQuery] = useState('');

  const handleSearch = event => {
    setQuery(event.target.value);
  };

  const filteredFoods = foods.filter(
    food => food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a food item..."
          value={query}
          onChange={handleSearch}
        />
      </div>

        <ul className="food-list">
          {filteredFoods.map(food => (
            <li key={food._id}>
              <FoodItem {...food} />
            </li>
          ))}
        </ul>
    </>
  );
}
