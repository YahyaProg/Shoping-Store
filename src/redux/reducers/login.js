export const Login = (
  state = {
    isLogin: false,
    userName: "",
    email: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case "INIT_LOGIN":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
