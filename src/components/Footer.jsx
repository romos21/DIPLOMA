import React from 'react';
import footerStyles from '../styles/components/Footer';
import {Link, Router} from "react-router-dom";
import {useHistory} from "react-router";

const Footer = (props) => {
    const classes=footerStyles();
    const history = useHistory();
    return (
        <div className={classes.footer}>
            <div className={classes.mainFooter}>
                <div className={classes.mainSiteElements}>
                    <Router history={history}>
                        <Link to='/'>
                            <div className={classes.siteTitle}>NetyNasyy</div>
                        </Link>
                    </Router>
                    <div className={classes.siteEmblem}/>
                </div>
                <div className={classes.authors}>
                    <span>Designed by: </span>
                    <span>
                        <div className={classes.contacts}>
                            <a href='https://vk.com/annastasya_b' ><div className={classes.dropdownElement}>VK</div></a>
                            <a href='https://www.instagram.com/nety_nasyy/'><div className={classes.dropdownElement}>Instagram</div></a>
                            <div className={classes.dropdownElement}>+375(44)799-06-90</div>
                        </div>
                        <span className={classes.contactName}>Ananas</span>
                    </span>
                    <span>Produced by: </span>
                    <span>
                        <div className={classes.contacts}>
                            <a href='https://vk.com/romulik21'><div  className={classes.dropdownElement}>VK</div></a>
                            <a href='https://www.instagram.com/romos_21/'><div  className={classes.dropdownElement}>Instagram</div></a>
                            <div className={classes.dropdownElement}>+375(44)799-06-90</div>
                        </div>
                        <span className={classes.contactName}>RoMos_21</span>
                    </span>
                </div>
            </div>
            <div className={classes.lowerFooter}>
                <span className={classes.lowerFooterContent}>(c) NetyNasyy 2020.</span>
            </div>
        </div>
    );
};

export default Footer;
