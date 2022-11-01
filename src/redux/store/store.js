import { createStore, applyMiddleware, compose } from "redux";
import { CommentStart } from "../actions/comment";
import {initLogin} from "../actions/login"
import { UpdateCartAction } from "../actions/updateAddtoCart";
import { Reducers } from "../reducers/index";
import thunk from "redux-thunk";
import { firstFavorit } from "../actions/favorite";
import { initiolProducts } from "../actions/getProducts";
import {initSignIn} from "../actions/signIn"
import {AllProducts} from "../actions/getProducts"
export const store = createStore(Reducers, compose(applyMiddleware(thunk)));

store.dispatch(UpdateCartAction());
store.dispatch(firstFavorit(localStorage.getItem("favorit")));
store.dispatch(CommentStart(localStorage.getItem("comments")));
store.dispatch(initiolProducts());
store.dispatch(initLogin(localStorage.getItem('login')))
store.dispatch(initSignIn(localStorage.getItem("sing")))
store.dispatch(AllProducts())
store.subscribe(() => {
  console.log(store.getState());
});
