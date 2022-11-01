import React, { useState, useEffect } from "react";
import "./Login.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/login";
const Login = () => {
  const [alert, setAlert] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const signIn = useSelector((state) => state.SignIn);
  const login = useSelector((state) => state.Login);

  console.log(login);

  const initialValues = {
    email: "",
    password: "",
  };
  const validatioanSchema = Yup.object({
    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    password: Yup.number("you should enter number").required(),
  });
  const onSubmit = async (values) => {
    const correctUser = signIn.filter((item) => {
      console.log(item);
      return item.password === values.password && item.email === values.email;
    });

    if (correctUser && correctUser.length) {
      history.push("/");
      dispatch(LoginAction(values));
    } else {
      setAlert("No Match email or Oncoorect Password");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <p>Hi!</p>
        <div className="login-describtion">
          <p>
            Besides registering, you can also test the template with test
            account information(email: test@info.com - Password: 123456)
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validatioanSchema}
          onSubmit={onSubmit}
        >
          <Form className="form">
            <div className="form-item">
              <label htmlFor="email">
                <span>*</span> email
              </label>
              <Field
                placeholder="input your email"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage style={{ color: "crimson" }} name="email">
                {(errorMessage) => (
                  <div className="errorMessage">{errorMessage}</div>
                )}
              </ErrorMessage>
            </div>
            <div className="form-item">
              <label htmlFor="password">
                <span>*</span> password
              </label>
              <Field
                placeholder="input your Password"
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage style={{ color: "crimson" }} name="password" />
            </div>
            {alert ? <p className="alert">{alert}</p> : null}
            <button type="submit" className="login-btn">
              Login
            </button>
            <span>
              Dont You Have An Account?{" "}
              <Link className="" to="SignIn">
                Sing Up
              </Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
