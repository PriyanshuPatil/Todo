import { POST_TODO_ERROR, POST_TODO_LOADING } from "./todo.actionType"
import axios from "axios"

export const Post_Todo=async()=(dispatch)=>{
try{
dispatch({type:POST_TODO_LOADING});
axios
    .post(`${process.env.REACT_APP_URL}users/login`, cred)
    .then((res) => {
      dispatch({ type: types.LOGIN_USERS_SUCCESS, payload: res.data.token });
    })
}catch(err){
dispatch()
}
}