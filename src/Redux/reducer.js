import {getorderrequest,getordersuccess,getorderfailed,updateorderrequest,updateordersuccess,updateorderfailed  } from "./actiontype";
const initialstate={
orders:[],
isloading:false,
iserror:false,
isloaded:false,
isupdatingreq:false,
isupdatingsuccess:false,
isupdatingerror:false,
};
export const reducer=(state=initialstate,action)=>{
switch(action){
    case getorderrequest:return{...state,isloading:true}
    case getordersuccess:return{...state,isloading:false,orders:action.payload,isloaded:true}
    case getorderfailed:return{...state,isloading:false,iserror:true,isloaded:false}
    case updateorderrequest:return{...state,isupdatingreq:true}
    case updateordersuccess:return{...state,isupdatingreq:false,isupdatingsuccess:true}
    case updateorderfailed:return{...state,isupdatingreq:false,isupdatingerror:true}
    default :return state
}
}