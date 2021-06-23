import * as actionTypes from "../Action/Action";
const initialState={
    addressstorage:[]
}
const AddressReducer = (state=initialState,action)=>{
    
    switch(action.type){
        case actionTypes.Addaddress:
            console.log(action.payload)
            const beforeadd =[...state.addressstorage]
            const newadd=[...beforeadd,action.payload]
            return{
                addressstorage:newadd
            }
        case actionTypes.Removeaddress:
            state.addressstorage.splice(action.index,1)
            return {
                addressstorage:{
                    ...state.addressstorage
                }
            }

        default :
        return state;
    }
}
export default AddressReducer;