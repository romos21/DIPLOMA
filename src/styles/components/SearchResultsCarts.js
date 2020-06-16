import {createUseStyles} from "react-jss";

const searchResultsCartsStyles = theme => {
    return {
        searchResultsRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        cartDemonstration: {
            backgroundColor: 'rgba(0,0,0,0.91)', /* Чёрный фон */
            height: '100%', /* Высота максимальна */
            left: 0, /* Нулевой отступ слева */
            top: 0, /* Нулевой отступ сверху */
            width: '100%', /* Ширина максимальна */
            position: 'fixed',
            zIndex: 100,
            padding: 50,
        },
        notFound: {
            margin: 'auto',
            textAlign: 'center',
            width: 400,
            height: 300,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("https://i.gifer.com/G2TW.gif")',
            border: '1px solid white',
            borderRadius: 5,
        }


    };
};
export default createUseStyles(searchResultsCartsStyles, {name: 'SearchResultsCarts'});




