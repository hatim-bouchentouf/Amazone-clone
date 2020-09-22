import React from "react";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";

function CheckOut() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkOut">
      <div className="checkOut_left">
        <img
          className="checkOut_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/Com2us_BB._V505880848_.png"
          alt=""
        />
        <div>
          <h3>hello, {user?.email}</h3>
          <h2 className="checkOut_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
