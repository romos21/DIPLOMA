import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import cartsReducer from "./cartsReducer";
import storage from 'redux-persist/lib/storage';
const reducers=persistReducer({
    key:'root',
    storage,
    whitelist: ['carts'],
    },
    combineReducers(
        {
            ...cartsReducer,
        }
    )
);
export default reducers;