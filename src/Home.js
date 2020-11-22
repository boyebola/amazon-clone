import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MTM3M2NhM2Et/MTM3M2NhM2Et-MDZiMjBiMjkt-w1500._CB406836698_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1"
            title="The len info"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="The len info2"
            price={20.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="The len info3"
            price={30.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="The len info4"
            price={40.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="The len info5"
            price={59.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="The len info6"
            price={69.99}
            image="https://m.media-amazon.com/images/I/41Rr75iWkvL._AC_SL260_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
