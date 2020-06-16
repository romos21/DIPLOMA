import {createActions} from 'redux-actions';

export const {
    cartsAdd,
    searchBy,
    searchResult,
    sortBy,
    favouritesAdd,
    favouritesRemove,
    resultOutputDataChange,
} = createActions(
    "CARTS_ADD",
    "SEARCH_BY",
    "SEARCH_RESULT",
    "SORT_BY",
    "FAVOURITES_ADD",
    "FAVOURITES_REMOVE",
    "RESULT_OUTPUT_DATA_CHANGE",
);
