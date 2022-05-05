import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <li key={props.product.id} className="product-item my-20 mx-10 p-10 col-4">
      <Link to={`/product/${props.product.id}`} className="flex">
        <img className="mr-10 ml-5" src={props.product.image} alt="" />
        <div>
          <p>ID: {props.product.id}</p>
          <p>Title: {props.product.title}</p>
          <p>Rating: {props.product.rating.rate}</p>
          <p>Price: {props.product.price}</p>
        </div>
      </Link>
    </li>
  );
}
