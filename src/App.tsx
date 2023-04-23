import React from 'react';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './styles/main.scss'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
