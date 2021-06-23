import * as actionType from "./Action";

export const Addaddress =(payload)=>{
    return{
        type : actionType.Addaddress,
        payload:payload
    }
}
export const Removeaddress =(index)=>{
    return{
        type:actionType.Removeaddress,
        index :index
    }
}