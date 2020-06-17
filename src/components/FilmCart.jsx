import React, {useState, useEffect} from 'react';
import filmCartStyles from '../styles/components/FilmCart';
import {connect} from 'react-redux';
import shortId from 'shortid';
import {
    favouritesAdd,
    favouritesRemove,
} from "../actions";
import {useParams} from "react-router-dom";

const mapDispatchToProps = {
    favouritesAdd,
    favouritesRemove,
};


const FilmCart = (props) => {
    const classes = filmCartStyles();
    const params = useParams();
    const [cartState, cartChange] = useState({});
    useEffect(() => {
        const {carts = []} = props;
        if (carts.length && params.id) {
            cartChange(carts.find(item => item.id.toString() === params.id) || {});
        }
    }, [props.carts]);
    const handleClick = (event) => {
        event.preventDefault();
        favourites.includes(cart) ? props.favouritesRemove({favourite: cart}) : props.favouritesAdd({favourite: cart});
    };
    const handleClickNavigation = (event) => {
        event.preventDefault();
        history.push(`/${cart.id}`);
    };
    const {cart = cartState, favourites, history} = props;
    const buttonFavouritesStyle = favourites.includes(cart) ? classes.removeFromFavourites : classes.addToFavourites;
    const buttonFavouritesText = favourites.includes(cart) ? 'Remove from favourites' : 'Add to favourites';
    const classNameForDemonstration = window.location.pathname === '/' + cart.id ? classes.classNameForDemonstration : null;
    return (
        <div className={classNameForDemonstration}>
            <img src={cart.poster_path} className={classes.searchResultsElement} onClick={handleClickNavigation}/>
            <div className={classes.ElementData}>
                <span className={classes.cartName}>{cart.title} </span>
                <span className={classes.cartDate}>{cart.release_date?cart.release_date.split('-')[0]:null} </span>
                <button type='button' className={buttonFavouritesStyle}
                        onClick={handleClick}>{buttonFavouritesText}</button>
                <span className={classes.cartGenre}>{cart.genres ? cart.genres.map(genre => {
                    return <span key={shortId.generate()}>{genre + ' '}</span>
                }) : null}</span>
            </div>
            {window.location.pathname === '/' + cart.id ?
                <p className={classes.movieDescription}>{cart.overview}</p> : null}
            {window.location.pathname === '/' + cart.id
                ?
                <>
                    <p className={classes.movieBudget}>
                        <span>Budget:</span>
                        <span className={classes.financeValue}>{cart.budget+'$'}</span>
                    </p>
                    < p className={classes.movieRevenue}>
                        < span> Revenue:</span>
                        <span className={classes.financeValue}>{cart.revenue+'$'}</span>
                    </p>
                </>
                : null
            }
            {window.location.pathname === '/' + cart.id ?
                <div className={classes.movieRateBlock}>
                    <div>Rating:</div>
                    <div className={classes.movieRateContent}>{cart.vote_average}</div>
                </div>
                : null
            }
        </div>
    );
};

export default connect(null, mapDispatchToProps)(FilmCart);


