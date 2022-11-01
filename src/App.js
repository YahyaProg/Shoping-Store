import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar, Footer, Favorit } from "./components/index";
import {
  CartPage,
  Products,
  Home,
  SingleProductPage,
  Login,
  SignIn,
  ErrorPage,
} from "./pages/index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [Link, setLink] = useState();
  const { link } = useSelector((state) => state.GetLink);
  const sngIn=useSelector((state)=>state.SignIn)
  const login = useSelector((state) => state.Login);
  useEffect(() => {
    setLink(link);
  }, [link, history, dispatch]);

 useEffect(()=>{
  localStorage.setItem("login",JSON.stringify(login))
 },[login])
 useEffect(()=>{
  localStorage.setItem("sing" , JSON.stringify(sngIn))
 },[sngIn])
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/products/${Link}`}>
            <Products />
          </Route>
          <Route exact path="/products/local/digital">
            <Products />
          </Route>
          <Route exact path="/products/local/digital/lobtopandAccessory">
            <Products />
          </Route>
          <Route exact path="/products/local/digital/mobileandAccessory">
            <Products />
          </Route>
          <Route exact path="/products/local/digital/ComputerAndAccessory">
            <Products />
          </Route>
          <Route exact path={`/products/local/Digital/lobtopandAccessory/:id`}>
            <SingleProductPage />
          </Route>
          <Route exact path={`/products/local/Digital/MobileandAccessory/:id`}>
            <SingleProductPage />
          </Route>
          <Route
            exact
            path={`/products/local/Digital/ComputerAndAccessory/:id`}
          >
            <SingleProductPage />
          </Route>
          <Route
            exact
            path={`/products/local/Digital/lobtopandAccessory/labtop/:id`}
          >
            <Products />
          </Route>
          <Route
            exact
            path={`/products/local/Digital/MobileandAccessory/mobile/:id`}
          >
            <Products />
          </Route>
          <Route
            exact
            path={`/products/local/Digital/ComputerandAccessories/:id`}
          >
            <Products />
          </Route>
          <Route exact path="/products/cart">
            <CartPage />
          </Route>
          <Route
            exact
            path="/login"
            render={() => (!login.isLogin ? <Login /> : <Redirect to="/" />)}
          />

          <Route exact path="/SignIn">
            <SignIn />
          </Route>

          <Route
            exact
            path="/product/favarit"
            render={() => (login.isLogin ? <Favorit /> : <Redirect to="/" />)}
          />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
