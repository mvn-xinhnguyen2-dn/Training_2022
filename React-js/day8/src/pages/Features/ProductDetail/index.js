import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiProductGetDetail } from "../../../api/product/product.api";

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    apiProductGetDetail(id).then((e) => {
      console.log(e.data);
      setProductDetail(e.data);
    });

    console.log(process.env.REACT_APP_TEST);
  }, [id]);
  return (
    <div className="product-detail">
      <div className="container">
        <p className="breadcrumbs my-20">
          <Link to="/">HOME</Link>
          <span>/</span>
          <Link to="/products">PRODUCT LIST</Link>
          <span>/</span>
          <Link to={`/product/${productDetail.id}`}>{productDetail.category}</Link>
        </p>
        <div className="product-brief flex p-20">
          <img className="image mr-10 ml-5 col-3" src={productDetail.image} alt="" />
          <div
            key={productDetail.id}
            className="product-item my-20 mx-10 p-10 col-9"
          >
          <h2 className="title pb-20">{productDetail.title}</h2>
            <div>
              <p>ID: {productDetail.id}</p>
              <p>Rating: {productDetail.category}</p>
              <p>Title: {productDetail.title}</p>
              <p>Description: {productDetail.description}</p>
              <p>Price: {productDetail.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
