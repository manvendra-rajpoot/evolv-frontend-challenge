import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Dish.css';
import { useDispatch } from 'react-redux';
import { removeDish } from '../../store/actions/dishActions';

const Dish = ({id, title, image, protein, fats, carbs}) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const removeFromStore = (e) => {
        e.preventDefault()
        console.log("ID",id);
        dispatch(removeDish(id));
    };

    return (
        <div className='dish'>
            <div className='dishInfo'>
                <img src={image} alt={title} height="50" width="50" />
                <h5>{title}</h5>
            </div>
            <div className="dishNutrients">
                <span style={{ width: "100%", textAlign: "center", color: "rgb(65, 68, 68)"}}>{protein}</span>
            </div>  
            <div className="dishNutrients">
                <span style={{ width: "100%", textAlign: "center", color: "rgb(65, 68, 68)" }}>{fats}</span>
            </div>
            <div className="dishNutrients">
                <span style={{ width: "100%", textAlign: "center", color: "rgb(65, 68, 68)" }}>{carbs}</span>
            </div>
            <div className="dishNutrients">
                <span style={{ width: "100%", textAlign: "center", color: "rgb(65, 68, 68)"}} >{parseInt(protein)*4 + parseInt(fats)*9 + parseInt(carbs)*4}</span>
            </div>

            {location.pathname ==='/admin' 
                ?
                <div className='controlBtn'>
                    <Link to={`/edit/${id}`}><button id='editBtn'>Edit</button> </Link>
                    <button onClick={removeFromStore} id='removeBtn'>Remove</button>
                </div> 
                : 
                <div className='controlBtn' >
                    <button id='addBtn'>Add to cart</button>
                </div>
            }
            
        </div>
    )
}

export default Dish;
