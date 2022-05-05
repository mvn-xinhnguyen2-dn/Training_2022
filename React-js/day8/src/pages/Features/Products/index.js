import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/modules/ProductItem";

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [numProduct, setNumProduct] = useState(6);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${numProduct}`)
      .then(function (response) {
        return response.json();
      })
      .then((products) => {
        setProductList(products);
      })
      .catch((error) => console.error(error));
  }, [numProduct]);

  return (
    <div className="container">
      <h2 className="mt-20">Products</h2>
      <ul className="product-list flex">
        {productList.map((product) => {
          let productItem = "";
          productItem = (
            <ProductItem
              key={product.id}
              product={product}
              productList={productList}
            />
          );
          return productItem;
        })}
      </ul>
      <div className="num-product my-0 mx-auto">
        <button onClick={() => setNumProduct(numProduct + 6)}>
          More product
        </button>
      </div>
    </div>
  );
}
