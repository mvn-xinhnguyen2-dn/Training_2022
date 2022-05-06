import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then((product) => {
        setProductDetail(product);
        console.log(product);
      })
      .catch((error) => console.error(error));
  }, [id]);
  console.log(productDetail);
  return (
    <div className="product-detail">
      <div className="container">
        <h1 className="title">ProductDetail: {productDetail.title}</h1>
        <div
          key={productDetail.id}
          className="product-item flex my-20 mx-10 p-10"
        >
          <img className="image mr-10 ml-5" src={productDetail.image} alt="" />
          <div>
            <p>ID: {productDetail.id}</p>
            <p>Rating: {productDetail.category}</p>
            <p>Title: {productDetail.title}</p>
            <p>Rating: {productDetail.description}</p>
            <p>Price: {productDetail.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
