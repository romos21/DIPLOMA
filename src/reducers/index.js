import {combineReducers} from 'redux';
import cartsReducer from "./cartsReducer";
const reducers=combineReducers(
    {
        ...cartsReducer,
    }
);
export default reducers;