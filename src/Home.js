import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img alt=" " className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/3_Desktop-Hero_1x._CB403313252_.jpg" />

            <div className="home__row">
                <Product
                    id="1231231"
                    title="
                    New Apple MacBook Pro (16-inch, 16GB RAM, 1TB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey"
                    price={199900}
                    rating={1}
                    image="https://www.apple.com/in/macbook-pro/images/overview/hero_mbp__fsgedw8koju6_medium_2x.jpg"
                />
                <Product
                    id="1231232"
                    title="All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful bass and Alexa (Blue)"
                    price={4499}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1231233"
                    title="Samsung 190.5 cm (75 inches) 8 Series 75NU8000 4K LED Smart TV (Black)"
                    price={352900}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/91IttqgqY9L._SL1500_.jpg"
                />
                <Product
                    id="1231234"
                    title="Canon D5600 Digital Camera 18-55mm VR Kit (Black)"
                    price={44890}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/61fdH0yoBJL._SL1000_.jpg"
                />
                <Product
                    id="1231235"
                    title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
                    price={24698}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1231236"
                    title="Livzing Multipurpose Foldable Study Desk Portable Wooden Utility Laptop Table for Adults & Kids Bedside Drawing Room Home décor with Mate Finish.
                    HOF Computer Student Chair Priviya - 7002 N Series, Office Ergonomic Office Chair Executive Artificial Leather Computer Chair, Easy Assamble Chair - Black
                    .TABLE MAGIC- Alder Multipurpose Utility Table for Laptop and Multiple Usage at Any Place"
                    price={119600}
                    rating={1}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif"
                />
            </div>
        </div>
    )
}

export default Home;
