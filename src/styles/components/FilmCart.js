import {createUseStyles} from "react-jss";

const filmCartStyles = theme => {
    return {
        searchResultsElement: {
            gridArea: 'img',
            margin: 20,
            width: 365,
            height: 550,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        ElementData: {
            padding: '0 20px',
            textAlign: 'left',
            display: 'grid',
            gridArea: 'elData',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridTemplateAreas: `
                            'name genre'
                            'date button'
                            `,
        },
        removeFromFavourites: {
            gridArea: 'button',
            border: '1px solid #959595',
            borderRadius: 3,
            backgroundColor: '#959595',
            padding: 5,
            color: 'black',
            outline: 'none',
            width: 200,
            height: 40,
        },
        addToFavourites: {
            gridArea: 'button',
            backgroundColor: '#98012E',
            border: '1px solid #98012E',
            borderRadius: 3,
            padding: 5,
            color: 'white',
            outline: 'none',
            width: 200,
            height: 40,
        },
        classNameForDemonstration: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 2fr',
            gridTemplateRows: '3fr 1fr 1fr 1fr 1fr',
            gridTemplateAreas: `
    'img description description'
    'img . budget'
    'img . revenue'
    'elData . rate'
    `,
        },
        elementChoose: {
            margin: 'auto',
        },
        movieDescription: {
            fontSize: 25,
            margin: 20,
            gridArea: 'description',
        },
        movieBudget: {
            display: 'flex',
            justifyContent:'space-between',
            alignSelf:'center',
            fontSize: 50,
            margin: 20,
            gridArea: 'budget',
        },
        movieRevenue: {
            display: 'flex',
            justifyContent:'space-between',
            alignSelf:'center',
            fontSize: 50,
            margin: 20,
            gridArea: 'revenue',
        },
        financeValue:{
            backgroundColor:'green',
            border:'1px solid green',
            borderRadius:3,
        },
        cartName: {
            gridArea: 'name',
        },
        cartDate: {
            gridArea: 'date',
        },

        cartGenre: {
            gridArea: 'genre',
        },
        movieRateBlock: {
            gridArea: 'rate',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontSize: 50,
        },
        movieRateContent: {
            backgroundColor: '#98012E',
            border: '1px solid #98012E',
            borderRadius: '50%',
            color: 'white',
            textAlign: 'center',
            padding: 5,
            minHeight: 50,
            minWidth: 50,
            margin: 15,
        },
    };
};
export default createUseStyles(filmCartStyles, {name: 'FilmCart'});





