import "./assets/styles.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import React, { Suspense } from "react";
import PrivateRoute from "./core/guards/PrivateRoute";

const Account = React.lazy(() => import("./pages/Account"));
const Auth = React.lazy(() => import("./pages/Auth"));
const Features = React.lazy(() => import("./pages/Features"));

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute path="/my-account">
              <Account />
            </PrivateRoute>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
