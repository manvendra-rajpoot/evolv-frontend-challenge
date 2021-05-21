import React from 'react';
import '../styles/DishListing.css'
import { useSelector } from 'react-redux';
import Dish from './Dish';
import '../../store/actions/dishActions';

const DishListing = () => {
    const dishes = useSelector(state => state.allDishes.dishes);

    return( 
        <div className='dishListing'> 
            <div> 
                {dishes.map(dish => (
                    <Dish id={dish.id} title={dish.title} image={dish.image} protein={dish.protein} fats={dish.fats} carbs={dish.carbs} />
                ))}
            </div>
        </div> 
    );
}

export default DishListing;
