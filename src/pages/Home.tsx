//import liraries
import React, { useEffect } from 'react';
import Gradients from '../components/Gradient/Gradient';
import ProductImages from '../components/ProductImage/ProductImages';
import Main from '../components/Main';

import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
// https://github.com/aman-atg/react-product-card/tree/master/src/pages

// create a component
const Home = () => {
    
    var sizes: any[] | NodeListOf<HTMLElement>,
     colors: any[] | NodeListOf<HTMLElement>, 
     shoes: any[] | NodeListOf<HTMLElement>, 
     gradients: any [] | NodeListOf<HTMLElement>, 
     shoeBackground: HTMLElement | null, shoeHeight;
    var prevColor = "blue";
    var animateOrNot = true;
  
    function changeColor(this: any) {
      if (!animateOrNot) {
        console.log("waittttt");
        return;
      }
      var primary = this.getAttribute("primary");
      var color = this.getAttribute("color");
      var shoe = document.querySelector<HTMLElement>(`.shoe[color="${color}"]`);
      var gradient = document.querySelector<HTMLElement>(`.Gradients_gradient[color="${color}"]`);
      var prevGradient = document.querySelector(
        `.Gradients_gradient[color="${prevColor}"]`
      );
  
      // showing correct color
      colors.forEach((color: { classList: { remove: (arg0: string) => any; }; }) => color.classList.remove("active"));
      this.classList.add("active");
  
      // changing primary css variable
      document.documentElement.style.setProperty("--primary", primary);
  
      // showing correct img
      shoes.forEach((sho: { classList: { remove: (arg0: string) => any; }; }) => sho.classList.remove("show"));
      shoe?.classList.add("show");
  
      // dealing with gradient
      gradients.forEach((g: { classList: { remove: (arg0: string, arg1: string) => any; }; }) => g.classList.remove("display", "behind"));
      prevGradient?.classList.add("behind");
      gradient?.classList.add("display");
  
      // logic
      prevColor = color;
      animateOrNot = false;
  
      // hack
      setTimeout(() => {
        animateOrNot = true;
      }, 800);
    }
  
    function changeSize(this: any) {
      sizes.forEach((size: { classList: { remove: (arg0: string) => any; }; }) => size.classList.remove("active"));
      this.classList.add("active");
    }
  
    // for responsive behaviour
    const changeHeight = () => {
      var x = window.matchMedia("(max-width:1000px)");
  
      !shoes ? (shoeHeight = 0) : (shoeHeight = shoes[0].offsetHeight);
  
      if (x.matches) {
        if (shoeHeight === 0) {
          try {
            setTimeout(changeHeight, 50);
          } catch (error) {
            alert("Something is Wrong!!");
          }
        }
        if (shoeBackground)
        shoeBackground.style.height = `${shoeHeight * 0.9}px`;
      } else if (!!shoeBackground) {
        // go back to default
        shoeBackground.style.height = "475px";
      }
    };
  
    useEffect(() => {
      sizes = document.querySelectorAll(".sizeContainer_size");
      colors = document.querySelectorAll(".color");
      shoes = document.querySelectorAll(".shoe");
      gradients = document.querySelectorAll(".Gradients_gradient");
      shoeBackground = document.querySelector(".Home_shoeBackground");
  
      colors.forEach(color => color.addEventListener("click", changeColor));
      sizes.forEach(size => size.addEventListener("click", changeSize));
      changeHeight();
    }, []);
    window.addEventListener("resize", changeHeight);
  
    


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
