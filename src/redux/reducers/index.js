import { combineReducers } from "redux";
import { ShowMenuReducer } from "./showMenuReducer";
import { SelectedLinks } from "./link";
import { SingleProducts } from "./singleProducts";
import { AddCart } from "./addTocart";
import { SchemaItem } from "./schemaItem";
import { Products } from "./products";
import { SortProducts } from "./sortProducts";
import { Login } from "./login";
import { SignIn } from "./singIn";
import { Favorite } from "./favorite";
import { Comments, CommentsCae } from "./comments";

export const Reducers = combineReducers({
  showMenu: ShowMenuReducer,
  GetLink: SelectedLinks,
  AddCart,
  SingleProducts,
  Schema: SchemaItem,
  Products,
  Sort: SortProducts,
  Login,
  SignIn,
  Favorite,
  Comments,
  CommentsCae,
});
