import {cartsAdd, searchBy,searchResult, sortBy,favouritesAdd,favouritesRemove,resultOutputDataChange} from 'actions';
import {handleActions} from 'redux-actions';
import {cartsState} from "../constants/defaultState";

export default {
    carts: handleActions({
        [cartsAdd]: (state, {payload}) => {
            const newState={...state,carts:payload.carts,searchValue:payload.searchValue?payload.searchValue:state.searchValue};
            return newState;
        },
        [favouritesAdd]: (state,{payload})=>{
            console.log(state);
            const newFavourites=[...state.favourites,payload.favourite];
            return{
                ...state,
                favourites: newFavourites,
            }
        },
        [favouritesRemove]: (state,{payload})=>{
            const newFavourites=state.favourites.filter(cart=>{
                if(cart.id!==payload.favourite.id){
                    return cart;
                }
            });
            return{
                ...state,
                favourites: newFavourites,
            }
        },
        [searchBy]: (state,{payload})=>{
            let contentStateNew=payload.contentToChange==='search'?{...state.searchState}:{...state.sortState};
            const contentStateKeys=Object.keys(contentStateNew);
            let currentContentState='';
            for (let i=0;i<contentStateKeys.length;i++){
                if(contentStateKeys[i]===payload.contentState){
                    contentStateNew[contentStateKeys[i]]=true;
                    currentContentState=contentStateKeys[i];
                }
                else {
                    contentStateNew[contentStateKeys[i]]=false;
                }
            }
            return{
                ...state,
                searchState: payload.contentToChange==='search'?{...contentStateNew}:state.searchState,
                sortState: payload.contentToChange==='sort'?{...contentStateNew}:state.sortState,
                searchValue: payload.searchValue?payload.searchValue:state.searchValue,
                currentSearchState:payload.contentToChange==='search'? currentContentState:state.currentSearchState,
                currentSortState:payload.contentToChange==='sort'? currentContentState:state.currentSortState,
            }
        },
    }, cartsState),
};

