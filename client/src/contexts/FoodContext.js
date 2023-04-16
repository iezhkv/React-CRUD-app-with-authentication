import React, { createContext, useState, useEffect } from 'react';
import * as foodService from '../services/foodService';

export const FoodsContext = createContext();

export function FoodsProvider(props) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodService.getAll().then((data) => {
      const formattedData = data.map((item) => ({
        ...item,
        price: `${Number(item.price).toFixed(2)}лв.`,
      }));
      setFoods(formattedData);
    });
  }, []);

  return (
    <FoodsContext.Provider value={{ foods, setFoods }}>
      {props.children}
    </FoodsContext.Provider>
  );
}
