import dishes from '../../_data/dishes';
import { ActionTypes } from '../constants/actionTypes';

let lastId = 0;
const initialState = {
    dishes: dishes,
}

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISH:
            return {...state, 
                dishes: [
                    ...state.dishes, {
                        id: ++lastId,
                        title: action.payload.title,
                        image: action.payload.image,
                        protein: action.payload.protein,
                        fats: action.payload.fats,
                        carbs: action.payload.carbs,
                    }
            ]}; 
        case ActionTypes.EDIT_DISH:
            let updatedDishList = state.dishes.map((dish) => {
                if(dish.id === action.payload.id) {
                    dish.protein = action.payload.protein;
                    dish.fats = action.payload.fats;
                    dish.carbs = action.payload.carbs;
                } return dish;
            }
            // (dish.id !== action.payload.id ? dish : (dish.protein = action.payload.protein, dish.fats = action.payload.fats, dish.carbs = action.payload.carbs) ) 
            );
            return {...state,
                dishes: updatedDishList
            }

        case ActionTypes.REMOVE_DISH:
            let newDishList = state.dishes.filter((dish) => (dish.id !== action.payload.id));
            return {
                ...state,
                dishes: newDishList
            }
        default:
            return state;
    }
}