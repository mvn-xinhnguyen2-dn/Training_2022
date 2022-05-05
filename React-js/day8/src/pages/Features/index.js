import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import AboutUs from "./AboutUs";

export default function Features() {
  return (
    <>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:id" children={<ProductDetail />} />
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
