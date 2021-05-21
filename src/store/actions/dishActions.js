import { ActionTypes } from '../constants/actionTypes';

export const addDish = (dish) => {
    return {
        type: ActionTypes.ADD_DISH,
        payload: {
            title: dish.title,
            image: dish.image,
            protein: dish.protein,
            fats: dish.fats,
            carbs: dish.carbs,
        }
    }
}

export const editDish = (dish) => {
    return {
        type: ActionTypes.EDIT_DISH,
        payload: {
            id: dish.id,
            protein: dish.protein,
            fats: dish.fats,
            carbs: dish.carbs,
        }
    }
}

export const removeDish = (dishId) => {
    return {
        type: ActionTypes.REMOVE_DISH,
        payload: {
            id:dishId
        }
    }
}