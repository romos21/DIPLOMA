import {createUseStyles} from "react-jss";

const favouritesStyles = theme => {
    return {
        searchResultsRow:{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        favouritesEmpty:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    };
};
export default createUseStyles(favouritesStyles, {name: 'Favourites'});
