import React, { Fragment } from "react";

import {
  Design,
  NewestProducts,
  SchemaAdd,
  Services,
  ShowCategories,
  Schema,
} from "../components/index";

const Home = () => {
  return (
    <Fragment>
      <SchemaAdd />
      <Services />
      <Schema />
      <ShowCategories />
      <NewestProducts />

      <Design />
    </Fragment>
  );
};

export default Home;
