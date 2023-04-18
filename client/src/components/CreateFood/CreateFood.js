import React, { useState, useContext, useEffect } from 'react';
import { FoodsContext } from '../../contexts/FoodContext';
import { create } from '../../services/foodService';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './CreateFood.css';




export default function CreateFood({edit = false}) {
  const { id } = useParams();
  const { foods } = useContext(FoodsContext);
  let foodToBeEdited = null;

  const [submittionFailed, setSubmittionFailed] = useState(false);

  const navigate = useNavigate();
  const { setFoods } = useContext(FoodsContext);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    cookTime: '',
    image: '',
    description: '',
  });

  if (edit) {
    foodToBeEdited = foods.find((food) => food._id === id);
    console.log(foodToBeEdited);
    
  }
  useEffect(() => {
    if (edit && foodToBeEdited) {
      setFormData({
        name: foodToBeEdited.name,
        price: foodToBeEdited.price,
        cookTime: foodToBeEdited.cookTime,
        image: foodToBeEdited.image,
        description: foodToBeEdited.description,
      });
    }
    else {
      clearFormData();
      //TODO: deal with clearing the form data
    }
  }, [edit, foodToBeEdited]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (edit) {

      }
      else {
        createOne();
      }
      clearFormData();


    } catch (error) {
      console.error(error);
      setSubmittionFailed(true);
    }
  };

  const createOne = async () => {
    const newFood = await create(formData);
    setFoods((prevFoods) => [...prevFoods, newFood]);
    navigate(`/foods/${newFood._id}`);
  };

 

  return (
    <div>
      <h2>Create a New Food Item</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleInputChange}
        required 
        />

        <label htmlFor="price">Price:</label>
        <input 
        type="number" 
        name="price" 
        value={formData.price} 
        onChange={handleInputChange} />

        <label htmlFor="cookTime">Cook Time:</label>
        <input 
        type="number" 
        name="cookTime" 
        value={formData.cookTime} 
        onChange={handleInputChange} />

        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" 
        value={formData.image} 
        onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea 
        name="description" 
        value={formData.description} 
        onChange={handleInputChange} />

        {edit && <button type="submit">Edit</button>}
        {!edit && <button type="submit">Create</button>}

      </form>

      {submittionFailed && 
      <div className='err'>
        <p>
          Unsuccessfull creation please try again or check if the server is running
        </p>
      </div>
      
      }
    </div>
  );

  
  
  function clearFormData() {
    setFormData({
      name: '',
      price: '',
      cookTime: '',
      image: '',
      description: '',
    });
  }


}