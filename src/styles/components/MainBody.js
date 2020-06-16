import {createUseStyles} from "react-jss";

const mainBodyStyles = theme => {
    return {
        mainBody: {
            margin: 30,
        },
        searchResultsHead: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            paddingBottom: 30,
        },
        searchResultsCount: {
            backgroundColor: '#98012E',
            border: '1px solid #98012E',
            margin: 5,
            borderRadius: 3,
        },

        searchResultsSort: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        searchResultsSortTitle: {
            margin: '0 50px',
        },

        sortVariantsListElement: {
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


    };
};
export default createUseStyles(mainBodyStyles, {name: 'MainBody'});



