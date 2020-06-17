import React, {useRef,useEffect} from 'react';
import 'react-redux';
import headerStyles from '../styles/components/Header';
import {connect} from 'react-redux';
import {
    cartsAdd,
    actionBy,
    moviesOutputChange,
} from "../actions";
import {useHistory} from "react-router";
import {Link, Router} from 'react-router-dom';
import shortId from "shortid";

const mapStateToProps = state => ({
    carts: state.carts,
});
const mapDispatchToProps = {
    cartsAdd,
    actionBy,
    moviesOutputChange,
};
const Header = (props) => {
    const classes = headerStyles();
    const history = useHistory();
    const searchEl = useRef(null);
    const handleClickSearchBy=(event)=>{
        props.actionBy({contentState:event.target.textContent, contentToChange:'search'})
    };
    const handleClick = (event) => {
        event.preventDefault();
        fetch(`http://reactjs-cdp.herokuapp.com/movies?search=${window.encodeURI(searchEl.current.value)}&searchBy=${carts.currentSearchState}&sortOrder=${carts.sortOrder}&sortBy=${carts.currentSortState}&limit=9`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                history.push('/searchResult');
                props.cartsAdd({carts: data,searchValue:window.encodeURI(searchEl.current.value)});
            });
    };
   useEffect(()=>{
        fetch(`http://reactjs-cdp.herokuapp.com/movies?search=${window.encodeURI(searchEl.current.value)}&searchBy=${carts.currentSearchState}&sortOrder=${carts.sortOrder}&sortBy=${carts.currentSortState}&limit=9`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                history.push('/searchResult');
                props.cartsAdd({carts: data,searchValue:window.encodeURI(searchEl.current.value)});
            });
    },[props.carts.currentSearchState]);
   const searchByEl=useRef(null);
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
                <div className={classes.secHeaderEl}>
                    <img src='https://static.tildacdn.com/tild6431-3066-4264-b661-306535386264/logo.svg' height={20}/>
                    <span>FINAL DIPLOMA</span>
                    <span className={classes.diplomaTitle}>"MOVIE APP"</span>
                </div>
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
                                <span onClick={!carts.searchState[searchKey]?handleClickSearchBy:null}
                                      ref={!carts.searchState[searchKey]?searchByEl:null}
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
