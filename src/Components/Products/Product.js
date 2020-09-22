import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  let history = useHistory();
  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      history.push("/SignIn");
    }
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <GradeIcon key={i} style={{ color: "orange" }} />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
