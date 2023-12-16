import {getorderrequest,getordersuccess,getorderfailed,updateorderrequest,updateordersuccess,updateorderfailed  } from "./actiontype";
import axios from "axios";
const GETORDERREQUEST=()=>{
    return{type:getorderrequest}
};
const GETORDERSUCCESS=(payload)=>{
    return{type:getordersuccess,payload}
};
const GETORDERERROR=()=>{
    return{type:getorderfailed}
};
const UPDATEORDERREQUEST=()=>{
return {type:updateorderrequest}
};
const UPDATEORDERSUCCESS=()=>{
    return {type:updateordersuccess}
    };
    const UPDATEORDERFAILED=()=>{
        return {type:updateorderfailed}
        };

  export const getorder=()=>async(dispatch)=>{
dispatch(GETORDERREQUEST());
return await axios.get(`https://reecobackend.onrender.com/reeco/orders`)
.then((res)=>{return dispatch(GETORDERSUCCESS(res.data));})
.catch((err)=>  dispatch(GETORDERERROR()))

  };
  export const updateorder=(id,obj)=>async(dispatch)=>{
    console.log(id,obj)
    dispatch(UPDATEORDERREQUEST());
    
    return await axios.patch(`https://reecobackend.onrender.com/reeco/orders/${id}`,obj)
    .then((res)=>{return dispatch(UPDATEORDERSUCCESS(res));})
    .catch((err)=>  dispatch(UPDATEORDERFAILED()))
    
      }       