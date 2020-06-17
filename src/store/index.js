import {createStore} from "redux";
import reducers from "../reducers";
import {persistStore} from "redux-persist";
import {devToolsEnhancer} from "redux-devtools-extension";

export const store=createStore(
    reducers,
    devToolsEnhancer(),
);
export const persistor=persistStore(store);
