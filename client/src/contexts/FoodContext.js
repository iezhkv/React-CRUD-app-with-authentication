import React, { createContext, useState, useEffect } from 'react';
import * as foodService from '../services/foodService';

export const FoodsContext = createContext();

export function FoodsProvider(props) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    foodService.getAll().then((data) => {
      
      setFoods(data);
    });
  }, []);

  return (
    <FoodsContext.Provider value={{ foods, setFoods }}>
      {props.children}
    </FoodsContext.Provider>
  );
}
