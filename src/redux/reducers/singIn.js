export const SignIn = (state = [], action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
      case "INIT_SING":
        return action.payload
    default:
      return state;
  }
};
