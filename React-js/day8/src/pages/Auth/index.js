import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  return (
    <>
      <Switch>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
