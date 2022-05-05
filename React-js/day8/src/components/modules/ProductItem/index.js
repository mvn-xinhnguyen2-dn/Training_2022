import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../store/favSlice";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.value);

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
    console.log(id);
  };

  return (
    <li className="product-item my-20 mx-10 p-10 col-4">
      <Link to={`/product/${props.product.id}`} className="flex">
        <img className="mr-10 ml-5" src={props.product.image} alt="" />
        <div>
          <p>ID: {props.product.id}</p>
          <p>Title: {props.product.title}</p>
          <p>Rating: {props.product.rating.rate}</p>
          <p>Price: {props.product.price}</p>
        </div>
      </Link>
      <span
        className="product-fav"
        onClick={(event) => handleFav(event, props.product.id)}
      >
        <FaHeart
          className={`icon-fav ${
            favs.includes(props.product.id) ? "active" : ""
          }`}
        />
      </span>
    </li>
  );
}
