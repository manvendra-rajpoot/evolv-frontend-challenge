import React, {useState} from 'react';
import DishListing from './DishListing';
import Header from './Header';
import TableHeader from './TableHeader';
import '../styles/Admin.css'
import { useDispatch } from 'react-redux';
import { addDish } from '../../store/actions/dishActions';

const Admin = () => {
    const dispatch = useDispatch();

    const [formData, updateFormData] = useState("");

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };
    const addToStore = (e) => {
        e.preventDefault()
        dispatch(addDish(formData));
        console.log(formData);
    };

    return (
        <div className='admin'>
            <Header />

            <div className="addDish">
                <h3><u>Add a Dish</u></h3>
                <form>
                    <h6>Dish title:</h6>
                    <input name="title" type='text' placeholder='title...' onChange={handleChange} required="true" />
                    <h6>Dish Image URL:</h6>
                    <input name="image" type="url" placeholder='URL...' onChange={handleChange} required />
                    <div className='inpNutrients' >
                        <h6>Protein (g): </h6>
                        <input name="protein" type="number" onChange={handleChange} required="true" />
                        <h6>Fats (g):</h6>
                        <input name="fats" type="number" onChange={handleChange} required="true" />
                        <h6>Carbs (g):</h6>
                        <input name="carbs" type="number" onChange={handleChange} required='true' />
                    </div>
                    <button onClick={addToStore} id="addBtn" type='submit' >Continue</button>
                </form>
            </div>

            <TableHeader />
            <DishListing />
        </div>
    )
}

export default Admin;
