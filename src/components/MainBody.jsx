import React, {useEffect,useRef} from 'react';
import 'react-redux';
import shortId from 'shortid';
import {useHistory} from "react-router";
import mainBodyStyles from '../styles/components/MainBody';
import SearchResultCarts from "./SearchResultsCarts";
import {connect} from "react-redux";
import {
    actionBy,
    cartsAdd,
    sortOrderChange,
} from "../actions";


const mapStateToProps = state => ({
    carts: state.carts,
});
const mapDispatchToProps = {
    actionBy,
    cartsAdd,
    sortOrderChange,
};
const MainBody = (props) => {
    const history = useHistory();
    const classes = mainBodyStyles();
    const handleSortOrderChange = () => {
        props.sortOrderChange();
    };
    const handleClickSortBy = (event) => {
        event.preventDefault();
        console.log(sortByEl.current.textContent);
        props.actionBy({contentState: sortByEl.current.textContent, contentToChange: 'sort'});
    };
    useEffect(() => {
        fetch(`http://reactjs-cdp.herokuapp.com/movies?search=${carts.searchValue}&searchBy=${carts.currentSearchState}&sortOrder=${carts.sortOrder}&sortBy=${carts.currentSortState}&limit=${carts.carts.limit}&offset=${carts.carts.offset}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                props.cartsAdd({carts: data});
            })
    }, [props.carts.currentSortState, props.carts.sortOrder]);
    const {carts} = props;
    const sortByEl=useRef(null);
    const sortKeys = Object.keys(props.carts.sortState);
    return (
        <div className={classes.mainBody}>
            <div className={classes.searchResultsHead}>
                <div>
                    <span>Results</span>
                    <span className={classes.searchResultsCount}>{
                        window.location.pathname === '/favourites'
                            ? props.carts.favourites.length
                            : props.carts.carts.data ? props.carts.carts.data.length : 0
                    }
                    </span>
                </div>
                <div className={classes.searchResultsSort}>
                    <span className={classes.searchResultsSortTitle}>Sort by</span>
                    {sortKeys.map(sortKey => (
                        <span onClick={!props.carts.sortState[sortKey]?handleClickSortBy:null}
                              ref={!props.carts.sortState[sortKey]?sortByEl:null}
                              key={shortId.generate()}
                              className={
                                  props.carts.sortState[sortKey]
                                      ? classes.sortVariantsListElement + ' ' + classes.activeVariant
                                      : classes.sortVariantsListElement + ' ' + classes.passiveVariant
                              }
                        >{sortKey}</span>
                    ))}
                </div>
                <span>
                    <span>Sort Order</span>
                    <span
                        className={classes.sortVariantsListElement + ' ' + classes.activeVariant}
                        onClick={handleSortOrderChange}
                    >
                        {carts.sortOrder}
                    </span>
                </span>
            </div>
            <SearchResultCarts/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
