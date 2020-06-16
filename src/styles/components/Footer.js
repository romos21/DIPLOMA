import {createUseStyles} from "react-jss";
import emblem from '../images/emblem.png';

const footerStyles = theme => {
    return {
        footer: {
            padding: 30,
            backgroundColor: 'black',
            bottom: 0,
        },
        mainFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        mainSiteElements: {
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
        },
        siteEmblem: {
            backgroundImage: `url(${emblem})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: 30,
            width: 30,
            margin: '0 5px',
        },
        siteTitle: {
            fontSize: 30,
        },

        authors: {
            '&:hover': {
                contactName: {
                    display: 'none',
                },
                contacts: {
                    display: 'grid',
                },
            },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },


        dropdownElement: {
            '&:hover':{
                color: '#98012E',
                backgroundColor: 'white',
            },
            color: 'white',
            width: 140,
            padding: 5,
        },
        contacts: {
            display: 'none',
            backgroundColor: '#98012E',
            border: '1px solid #98012E',
            borderRadius: 2,
        },
        lowerFooter: {
            paddingTop: 20,
            bottom: 0,
            textAlign: 'center',
        },
        lowerFooterContent: {
            backgroundColor: 'white',
            border: '1px solid white',
            borderRadius: 5,
            color: 'black',
        },
        contactName: {
            backgroundColor: 'white',
            border: '1px solid white',
            borderRadius: 5,
            color: 'black',
        },

    };
};
export default createUseStyles(footerStyles, {name: 'Footer'});







