import {createUseStyles} from "react-jss";
import mainBackground from '../images/mainBackground.jpg'
import emblem from '../images/emblem.png';
const headerStyles = theme => {
    return {
        '@global': {
            a: {
                color: 'white',
                textDecoration: 'none',
            },
        },
        headBackgroundImg: {
            backgroundImage: `url(${mainBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
        head: {
            backgroundColor: 'rgba(0,0,0,0.85)',
            fontSize: 20,
            padding: 30,
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gridTemplateRows: '1fr 5fr',
            gridTemplateAreas: `
                'mainSiteElements mainLinks favourites'
                '  . searchBlock .'
                `,
        },


        mainSiteElements: {
            gridArea: 'mainSiteElements',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
        },
        siteEmblem: {
            backgroundImage: `url(${emblem})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat ',
            height: 30,
            width: 30,
            margin: '0 5px',
        },
        siteTitle: {
            fontSize: 30,
        },
        viewTypeLinks: {
            margin: '0 5px',
        },
        secHeaderEl:{
            display:'flex',
            fontFamily:'"Comic Sans MS", cursive, sans-serif',
            justifyContent:'space-around',
            alignItems:'center',
            gridArea: 'mainLinks',
            padding:20,
        },
        diplomaTitle:{
            backgroundColor: '#98012E',
            border: '1px solid #98012E',
            borderRadius: 3,
        },
        favourites: {
            display: 'flex',
            gridArea: 'favourites',
            justifySelf: 'right',
            alignItems: 'center',
        },
        searchBlock: {
            gridArea: 'searchBlock',
            display: 'grid',
            gridTemplateRows: '5fr 1fr 2fr 3fr',
            gridTemplateAreas: `
                '.'
                'searchFunctional'
                'searchVariants'
                '.'
            `,
        },
        searchFunctional: {
            display: 'flex',
            justifyContent: 'center',
            gridArea: 'searchFunctional',
        },
        searchVariants: {
            gridArea: 'searchVariants',
            display: 'grid',
            gridTemplateColumns: '2fr 3fr 2fr',
            gridTemplateAreas: ". searchVariantsList .",
        },

        searchVariantsList: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 15,
            justifyContent: 'left',
        },
        searchVariantsTitle: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 15,
            marginLeft: 15,
        },

        searchVariantsListElement: {
            '&:hover': {
                opacity: '100%',
            },
            border: '1px solid',
            borderRadius: 3,
            opacity: '40%',
            margin: '0 5px',
        },
        activeVariant: {
            backgroundColor: '#98012E',
            borderColor: '#98012E',
            opacity: '100%',
        },
        passiveVariant: {
            backgroundColor: '#959595',
            borderColor: '#959595',
        },


        searchButton: {
            borderRadius: 20,
            border: '1px solid',
            outline: 'none',
            padding: 10,
            backgroundColor: '#98012E',
            borderColor: '#98012E',
            marginLeft: -50,
            width: '40%',
            color: 'white',
        },
        searchField: {
            borderRadius: 20,
            border: '1px solid',
            outline: 'none',
            backgroundColor: '#ffffff',
            borderColor: 'rgba(21, 21, 21, 0.32)',
            color: 'black',
            padding: '0 15px',
            width: '100%',
        }

    };
};
export default createUseStyles(headerStyles, {name: 'Header'});






