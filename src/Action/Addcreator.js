import axios from "axios";
import * as actionType from "./Action";
export const Addtocart =(payload)=>{
    return{
        type:actionType.ADD_TO_CART,
        payload:payload
    }     
    
}
export const Removetocart =(index)=>{
    return{
        type:actionType.REMOVE_TO_CART,
        index :index
    }
}
export const Addition =(payload)=>{
     return dispatch=>{
         dispatch(Addtocart(payload))
         axios.post("https://ecommerce-329f5-default-rtdb.firebaseio.com/orders",payload).then(resp=>console.log(resp))
         .catch(err=>console.log(err))
    }
    
}
export const Removal =(index)=>{
    return dispatch=>{
        dispatch(Removetocart(index))
        axios.post("https://ecommerce-329f5-default-rtdb.firebaseio.com/orders"+index).then(resp=>console.log(resp))
        .catch(err=>console.log(err))
   }
   
}