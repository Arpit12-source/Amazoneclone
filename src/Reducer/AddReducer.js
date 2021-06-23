import * as actionType from "../Action/Action";

const initialstate = {
    basket:[],
}
const AddReducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case actionType.ADD_TO_CART:
             
        return{
           basket:[...state.basket,{...action.payload}] 
            
        }
        case actionType.REMOVE_TO_CART:
         state.basket.splice(action.index ,1)
            return{
                basket:[...state.basket]
            }
        default:
            return state;
    }
}
export default AddReducer;