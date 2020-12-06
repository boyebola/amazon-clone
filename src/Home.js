import React from 'react';
import './css/Home.css';
import Product from './Product';

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
            title="Apple AirPods with Charging Case"
            price={177.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SX522_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player, released 2019"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/415eDd-iH9L._AC_SX425_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Fire HD 10 Tablet"
            price={159.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61-ngp6SbZL._AC_SX425_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="Fitbit Inspire 2 Health & Fitness Tracker "
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Essential Oil Diffuser"
            price={41.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71qj%2BxNeIVL._AC_SX425_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
