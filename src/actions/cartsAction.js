import {createActions} from 'redux-actions';

export const {
    cartsAdd,
    actionBy,
    favouritesAdd,
    favouritesRemove,
    sortOrderChange,
    moviesOutputChange,
} = createActions(
    "CARTS_ADD",
    "ACTION_BY",
    "FAVOURITES_ADD",
    "FAVOURITES_REMOVE",
    "SORT_ORDER_CHANGE",
    "MOVIES_OUTPUT_CHANGE",
);
