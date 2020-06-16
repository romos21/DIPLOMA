import React, {useEffect} from 'react';
import 'react-redux';
import {connect} from "react-redux";
import searchResultsCartsStyles from '../styles/components/SearchResultsCarts';
import FilmCart from "./FilmCart";
import {useHistory} from "react-router";
import {
    cartsAdd,
} from 'actions';
import Favourites from "./Favourites";
import {Route, Router, Switch} from "react-router-dom";


const mapStateToProps = state => ({
    carts: state.carts
});
const mapDispatchToProps = {
    cartsAdd,
};
const SearchResultCarts = (props) => {
    const classes = searchResultsCartsStyles();
    const history = useHistory();
    useEffect(() => {
        fetch('http://reactjs-cdp.herokuapp.com/movies?limit=9')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.cartsAdd({carts: data});
            });
    }, []);
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