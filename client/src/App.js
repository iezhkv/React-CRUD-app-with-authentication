
import UserContext, { UserProvider } from './contexts/UserContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as foodService from './services/foodService';

import './App.css';

import CreateItem from './components/CreateItem/CreateItem';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Foodlist from './components/FoodList/Foodlist';





function App() {

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    foodService.getAll().then((data) => {
      const formattedData = data.map((item) => ({
        ...item,
        price: `${Number(item.price).toFixed(2)}лв.`,
      }));
      setFoodItems(formattedData);
    });
  }, []);

  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/foods' element={<Foodlist foods={foodItems}/>} />

    </Routes>
    </>
  );
}

export default App;
