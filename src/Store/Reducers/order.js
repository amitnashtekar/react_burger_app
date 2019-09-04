import * as actionTypes from '../Actions/actions';

const initialState = {
    orders:[],    
    loading:false
}

 const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat({
                    orderId: action.orderId,
                    orderData: action.orderData
                }),
                loading:false
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;