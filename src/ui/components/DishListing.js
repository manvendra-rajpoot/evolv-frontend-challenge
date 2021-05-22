import React, { useState } from 'react';
import '../styles/DishListing.css'
import { useSelector } from 'react-redux';
import Dish from './Dish';
import TableHeader from './TableHeader';


const DishListing = () => {
    const dishes = useSelector(state => state.allDishes.dishes);
    const [searchDish, setSearchdish] = useState("");

    return( 
        <div className='dishListing'> 
            <div className='searchbar'>
                <input type="text" placeholder='Search dishes...' onChange={e => {setSearchdish(e.target.value)}} />
                <></>
            </div>
            <TableHeader />
            <div> 
                {dishes.filter((dish) => {
                    if (searchDish === "") {
                        return <Dish id={dish.id} title={dish.title} image={dish.image} protein={dish.protein} fats={dish.fats} carbs={dish.carbs} />

                    } else if (dish.title.toLowerCase().includes(searchDish.toLowerCase())){
                        return <Dish id={dish.id} title={dish.title} image={dish.image} protein={dish.protein} fats={dish.fats} carbs={dish.carbs} />
                    }
                }).map(dish => (
                    <Dish id={dish.id} title={dish.title} image={dish.image} protein={dish.protein} fats={dish.fats} carbs={dish.carbs} />
                ))}
            </div>
            <hr />
        </div> 
    );
}

export default DishListing;
