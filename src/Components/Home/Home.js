import React from "react";
import "./Home.css";
import Product from "../Products/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home"
        />
        <div className="home_row">
          <Product
            id="1"
            title="headphone jack"
            price={29.99}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            rating={4}
          />
          <Product
            id="2"
            title="sunglasses 2020"
            price={19.99}
            image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="wallet"
            price={19.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/08/ES-hq/2020/img/Amazon_Basics/XCM_CUTTLE_1236361_1247437_FR_3204565_379x304_es_ES._SY304_CB409297092_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="creme"
            price={39.99}
            image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            rating={5}
          />
          <Product
            id="6"
            title="cool bike"
            price={209.99}
            image="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="backpack for trip"
            price={89.99}
            image="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
