//import liraries
import React from 'react';
import Gradients from '../components/Gradient/Gradient';
import ProductImages from '../components/ProductImage/ProductImages';
import Main from '../components/Main';

import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
// https://github.com/aman-atg/react-product-card/tree/master/src/pages

// create a component
const Home = () => {
    return (
        <div className="Home">
            <div className="Home_container">
                <div className="Home_Card">
                    <div className="Home_shoeBackground">
                        <Gradients />

                        <h1 className="Home_nike">nike</h1>
                        <img src={logo} alt="logo" className="Home_logo" />
                        <a href="/#" className="Home_share">
                           <i><FontAwesomeIcon icon={faShareAlt} /></i>
                        </a>
                        <ProductImages />
                    </div>
                    <Main />
                </div>
            </div>
        </div>
    );
};

//make this component available to the app
export default Home;
