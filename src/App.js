import { auth } from "./firebase";
import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CheckOut from "./Components/ChekOutProduct/CheckOut";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import Payment from "./Components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/orders/Orders";

const promise = loadStripe(
  "pk_test_51HSlalBBZHwOu0PCwjHc518ED74krzBsYqG83HaMZ1RjIkIxetQ0rFHOCx7GFMyRor1eUFTbdwYQXUFIo88VvHid00krUnjx0C"
);

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/CheckOut">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/SignIn" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
