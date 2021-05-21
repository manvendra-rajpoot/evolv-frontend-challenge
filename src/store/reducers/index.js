import { combineReducers } from "redux";
import { dishReducer } from "./dishReducer";

const rootReducer = combineReducers({
    allDishes: dishReducer
});

export default rootReducer;