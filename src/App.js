import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import Success from "./pages/success/Success";
import Footer from "./components/footer/Footer";
import PriceList from './pages/priceList/PriceList';
import "./App.css";




function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/success' element={<Success />} />
                <Route path='/price' element={<PriceList/>} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
