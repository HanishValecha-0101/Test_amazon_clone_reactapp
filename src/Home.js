import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="">
            </img>
            <div className="home__row">
            <Product
            id="123"
            title="You Can Win: A Step-by-Step Tool for Top Achievers Paperback – 1 January 2014"
            image="https://images-na.ssl-images-amazon.com/images/I/51eYzc-5gJL._SX310_BO1,204,203,200_.jpg"
            price={500}
            rating={4}
             />
             <Product
            id="1000"
            title="Mamaearth Skin Care Regime Of Nature Kit SPF20 - Day & Night Cream Combo (50ml each) At Nykaa, Best Beauty Products Online"
            image="https://m.media-amazon.com/images/I/71uZJxGBVrL._AC_UY218_.jpg"
            price={1000}
            rating={5}
             />
            </div>
           

            <div className="home__row">
            <Product
            id="456"
            title=" Fitbit Versa 2 FB507RGPK Health and Fitness Smartwatch (Petal & Copper Rose)"
            image="data:image/jpeg;base64,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"
            price={20999}
            rating={5}
             />
             <Product
            id="491600509"
            title="Amazon Echo (3rd Gen) Smart Voice Activated Speaker, White"
            image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
            price={8000}
            rating={4}
             />
              <Product
            id="490024664"
            title="Bajaj GX 8 Mixer Grinder"
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BqZeevyaL._SX425_.jpg"
            price={7500}
            rating={4}
             />
            </div>
            

            <div className="home__row">
            <Product
            id="phone"
            title="OnePlus 8 Interstellar Glow, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in"
            image="https://images-na.ssl-images-amazon.com/images/I/51jRkmWWIFL._AC_SX425_.jpg"
            price={50000}
            rating={4}
             />
            
            </div>
           
           
             </div>
       
    )
}

export default Home
