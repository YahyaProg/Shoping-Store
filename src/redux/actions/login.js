export const initLogin=(login)=>{

  return async(dispatch)=>{
    await dispatch({type:"INIT_LOGIN" , payload:{...JSON.parse(login)}})
  }
}
export const LoginAction = (values) => {
  return async (dispatch, getState) => {
    const state = getState().SignIn;
    const sameItem = state.filter((item) => {
      return item.email === values.email;
    });
    const userName=sameItem[0].userName
    console.log("sameItem",sameItem);
    await dispatch({ type: "LOGIN", payload: {isLogin:true,...values , userName} });
  };
};

export const logOut=()=>{
  return async (dispatch,getState)=>{
    await dispatch({type:"LOGOUT" , payload:{isLogin:false , userName:"",email:"",password:''}})
  }
}
