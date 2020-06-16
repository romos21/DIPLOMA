import React from 'react';
import FilmCart from "./FilmCart";
import favouritesStyles from '../styles/components/Favourites';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    carts: state.carts
});

const Favourites = (props) => {
    const classes=favouritesStyles();
    const {carts, history} = props;
    return (
        carts.favourites.length ?
            <div className={classes.searchResultsRow}>
                {carts.favourites.map(cart => {
                    return (
                        <FilmCart
                            cart={cart}
                            favourites={carts.favourites}
                            key={cart.id}
                            history={history}
                        />
                    );
                })}
            </div>
            :
            <div className={classes.favouritesEmpty}>
                <img src='https://i.gifer.com/Vm7l.gif'/>
            </div>
    );
};
export default connect(mapStateToProps)(Favourites);