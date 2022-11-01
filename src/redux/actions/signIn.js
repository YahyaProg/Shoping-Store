export const initSignIn=(singIn)=>{
  return async(dispatch)=>{
    await dispatch({type:"INIT_SING",payload:[...JSON.parse(singIn)]})
  }
}
export const SingInAction = (values) => {
  return async (dispatch, getState) => {
    const state = getState().SignIn;
    await dispatch({ type: "SIGN_IN", payload: [...state, values] });
  };
};
