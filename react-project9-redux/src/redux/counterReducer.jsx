const initialState = {
    items: []
}
function CartReducer (state=initialState,action){
    switch (action.type){
        case "ADD_ITEM":
        case "REMOVE_ITEM":
        default:
            return state;    
    }

}
export default CartReducer;