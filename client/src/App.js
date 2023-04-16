import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FoodsProvider, FoodContext } from './contexts/FoodContext';
import * as foodService from './services/foodService';

import './App.css';

import SingleFood from './components/SingleFood/SingleFood';
import CreateFood from './components/CreateFood/CreateFood';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import FoodList from './components/FoodList/FoodList';

function App() {
  return (
    <FoodsProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateFood />} />
        <Route path='/foods/:id' element={<SingleFood />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/foods' element={<FoodList />} />
      </Routes>
    </FoodsProvider>
  );
}

export default App;
