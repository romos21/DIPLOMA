import React, {useEffect} from 'react';
import 'react-redux';
import {connect} from "react-redux";
import searchResultsCartsStyles from '../styles/components/SearchResultsCarts';
import FilmCart from "./FilmCart";
import {useHistory} from "react-router";
import {
    cartsAdd,
    moviesOutputChange,
} from 'actions';
import Favourites from "./Favourites";
import {Route, Router, Switch} from "react-router-dom";


const mapStateToProps = state => ({
    carts: state.carts
});
const mapDispatchToProps = {
    cartsAdd,
    moviesOutputChange,
};
const SearchResultCarts = (props) => {
    const classes = searchResultsCartsStyles();
    const history = useHistory();
    useEffect(() => {
        console.log(carts.currentSearchState);
        const fetchUrl=window.location.pathname==='/searchResult'
            ?`http://reactjs-cdp.herokuapp.com/movies?search=${carts.searchValue}&searchBy=${carts.currentSearchState}&sortOrder=${carts.sortOrder}&sortBy=${carts.currentSortState}&limit=${carts.carts.limit}&offset=${carts.carts.offset}`
            :`http://reactjs-cdp.herokuapp.com/movies?sortOrder=${carts.sortOrder}&sortBy=${carts.currentSortState}&limit=${carts.carts.limit}&offset=${carts.carts.offset}`
        fetch(fetchUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                props.cartsAdd({carts: data});
            })
    }, [props.carts.carts.limit, props.carts.carts.offset,props.carts.searchValue]);
    const {carts} = props;
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/'>
                    <div className={classes.searchResultsRow}>
                        {carts.carts.data ?
                            carts.carts.data.map(cart => {
                                return (
                                    <FilmCart
                                        key={cart.id}
                                        cart={cart}
                                        favourites={carts.favourites}
                                        history={history}
                                    />
                                );
                            })
                            : null
                        }
                    </div>
                    <div className={classes.footerRow}>
                        <button className={classes.addMoviesActive}
                                onClick={props.moviesOutputChange}
                        >
                            Show More...
                        </button>
                    </div>
                </Route>
                <Route path='/searchResult'>
                    {
                        carts.carts.data.length ?
                            <div className={classes.searchResultsRow}>
                                {carts.carts.data.map(cart => {
                                    return (
                                        <FilmCart
                                            key={cart.id}
                                            cart={cart}
                                            favourites={carts.favourites}
                                            history={history}
                                        />
                                    );
                                })}
                            </div>
                            :
                            <div className={classes.notFound}/>
                    }
                    <div className={classes.footerRow}>
                        <button className={classes.addMoviesActive}
                                onClick={props.moviesOutputChange}
                        >
                            Show More...
                        </button>
                    </div>
                </Route>
                <Route path='/favourites'>
                    <div>
                        <Favourites history={history}/>
                    </div>
                </Route>
                <Route path='/:id'>
                    <FilmCart
                        carts={carts.carts.data}
                        favourites={carts.favourites}
                        history={history}
                    />
                </Route>
            </Switch>
        </Router>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultCarts);