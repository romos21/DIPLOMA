import React, {useEffect} from 'react';
import 'react-redux';
import shortId from 'shortid';
import {useHistory} from "react-router";
import mainBodyStyles from '../styles/components/MainBody';
import SearchResultCarts from "./SearchResultsCarts";
import {connect} from "react-redux";
import {
    searchBy,
    cartsAdd
} from "../actions";


const mapStateToProps = state => ({
    carts: state.carts,
});
const mapDispatchToProps = {
    searchBy,
    cartsAdd,
};
const MainBody = (props) => {
    const history=useHistory();
    const classes = mainBodyStyles();
    const handleClickSortBy = (event) => {
        event.preventDefault();
        console.log(carts.currentSortState);
        props.searchBy({contentState: event.target.textContent, contentToChange:'sort'});
        console.log(carts.currentSortState);
        window.location.pathname==='/searchResult'?
        fetch(`http://reactjs-cdp.herokuapp.com/movies?search=${carts.searchValue}&searchBy=${carts.currentSearchState}&sortOrder=desc&sortBy=${carts.currentSortState}&limit=9`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                history.push('/searchResult');
                props.cartsAdd({carts: data});
            })
        :null;
    };
    const {carts}=props;
    const sortKeys = Object.keys(props.carts.sortState);
    return (
        <div className={classes.mainBody}>
            <div className={classes.searchResultsHead}>
                <div>
                    <span>Results</span>
                    <span className={classes.searchResultsCount}>{props.carts.carts.data?props.carts.carts.data.length:0}</span>
                </div>
                <div className={classes.searchResultsSort}>
                    <span className={classes.searchResultsSortTitle}>Sort by</span>
                    {sortKeys.map(sortKey => (
                        <span onClick={handleClickSortBy}
                              key={shortId.generate()}
                              className={
                                  props.carts.sortState[sortKey]
                                      ? classes.sortVariantsListElement + ' ' + classes.activeVariant
                                      : classes.sortVariantsListElement + ' ' + classes.passiveVariant
                              }
                        >{sortKey}</span>
                    ))}
                </div>
            </div>
            <SearchResultCarts/>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
