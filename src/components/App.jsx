import React from 'react';
import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import appStyles from '../styles/components/App';

const App = () => {
    appStyles();
    return (
        <>
            <Header/>
            <MainBody/>
            <Footer/>
        </>
    );
};

export default App;
