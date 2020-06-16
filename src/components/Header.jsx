import React, {useRef} from 'react';
import 'react-redux';
import headerStyles from '../styles/components/Header';
import {connect} from 'react-redux';
import {
    cartsAdd,
    searchBy
} from "../actions";
import {useHistory} from "react-router";
import {Link, Router} from 'react-router-dom';
import shortId from "shortid";

const mapStateToProps = state => ({
    carts: state.carts,
});
const mapDispatchToProps = {
    cartsAdd,
    searchBy,
};
const Header = (props) => {
    const classes = headerStyles();
    const history = useHistory();
    const searchEl = useRef(null);
    const handleClickSearchBy=(event)=>{
        props.searchBy({contentState:event.target.textContent, contentToChange:'search'})
    };
    const handleClick = (event) => {
        event.preventDefault();
        fetch(`http://reactjs-cdp.herokuapp.com/movies?search=${window.encodeURI(searchEl.current.value)}&searchBy=${carts.currentSearchState}&sortOrder=desc&sortBy=${carts.currentSortState}&limit=9`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                history.push('/searchResult');
                props.cartsAdd({carts: data,searchValue:window.encodeURI(searchEl.current.value)});
            });
    };

    const {carts} = props;
    const searchKeys = Object.keys(carts.searchState);
    return (
        <div className={classes.headBackgroundImg}>
            <div className={classes.head}>
                <div className={classes.mainSiteElements}>
                    <Router history={history}>
                        <Link to='/'>
                            <div className={classes.siteTitle}>NetyNasyy</div>
                        </Link>
                    </Router>
                    <div className={classes.siteEmblem}/>
                </div>
                <form className={classes.mainLinks}>
                    <span className={classes.viewTypeLinks}>Cartoons</span>
                    <span className={classes.viewTypeLinks}>Sitcoms</span>
                    <span className={classes.viewTypeLinks}>TV shows</span>
                    <span className={classes.viewTypeLinks}>Movies</span>
                </form>
                <div className={classes.favourites}>
                    <Router history={history}>
                        <Link to='/favourites'>
                            <span>Favourites</span>
                        </Link>
                    </Router>
                </div>
                <div className={classes.searchBlock}>
                    <form className={classes.searchFunctional}>
                        <input type="text" className={classes.searchField} ref={searchEl}/>
                        <Router history={history}>
                            <button type="button" className={classes.searchButton} onClick={handleClick}>
                                search
                            </button>
                        </Router>
                    </form>
                    <div className={classes.searchVariants}>
                        <span className={classes.searchVariantsTitle}>Search by</span>
                        <div className={classes.searchVariantsList}>
                            {searchKeys.map(searchKey => (
                                <span onClick={handleClickSearchBy}
                                    className={carts.searchState[searchKey]
                                        ? classes.searchVariantsListElement + " " + classes.activeVariant
                                        : classes.searchVariantsListElement + " " + classes.passiveVariant}
                                    key={shortId.generate()}
                                >{searchKey}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
