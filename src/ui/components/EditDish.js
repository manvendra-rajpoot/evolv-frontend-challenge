import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editDish } from '../../store/actions/dishActions';
import '../styles/EditDish.css';
import Header from './Header';


const EditDish = () => {
    const {dishId} = useParams();
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.allDishes.dishes);

    const rawDish = dishes.find(dish => dish.id === parseInt(dishId));


    const [formData, updateFormData] = useState(rawDish);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    const editInStore = (e) => {
        e.preventDefault();
        dispatch(editDish(formData));
    };

    return (
        <div>
            <Header />
            <div className='editDish'>
                <h3><u>Edit the Dish</u></h3>
                <form>
                    <div className='inpNutrients' >
                        <h6>Enter Protein (in g): </h6>
                        <input name="protein" type="number" onChange={handleChange} required />
                        <h6>Enter Fats (in g):</h6>
                        <input name="fats" type="number" onChange={handleChange} />
                        <h6>Enter Carbs (in g):</h6>
                        <input name="carbs" type="number" onChange={handleChange} />
                    </div>
                    <button onClick={editInStore} id="addBtn" type='submit' >Confirm Editing</button>
                </form>
                <p>*Go to Admin Dashboard to view the changes!</p>
            </div>
        </div>
    )
}

export default EditDish;
