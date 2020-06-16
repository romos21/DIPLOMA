import {createUseStyles} from "react-jss";

const appStyles = theme => {
    return {
        '@global': {
            body: {
                background: 'rgba(0, 0, 0, 0.91)',
                margin: 0,
                color: '#ffffff',
                fontFamily: 'Abril Fatface,sans-serif',
                cursor: 'pointer',
            },

            span:
                {
                    padding: 5,
                }
        },
    };
}
export default createUseStyles(appStyles, {name: 'App'});
