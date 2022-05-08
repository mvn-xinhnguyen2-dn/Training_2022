import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/modules/ProductItem";
import { apiProductGetList } from "../../../api/product/product.api";

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [numProduct, setNumProduct] = useState(6);

  useEffect(() => {
    apiProductGetList(numProduct).then((e) => {
      console.log(e.data);
      setProductList(e.data);
    });

    console.log(process.env.REACT_APP_TEST);
  }, [numProduct]);
  console.log(productList);

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
