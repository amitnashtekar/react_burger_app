import * as actionTypes from '../Actions/actions';

const initialState = {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:0,
    error:false
}
const INGREDIENTS_PRICE = {
    salad:1.2,
    bacon:0.8,
    cheese:1,
    meat:0.7
}

const reducer =(state= initialState,action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENTS: 
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
        };
        case actionTypes.REMOVE_INGREDIENTS: 
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
        };
        case actionTypes.SET_INGREDIENTS: 
        return {
            ...state,
            ingredients:action.ings,
            error:false 
        };
        case actionTypes.FETCH_INGREDIENTS_FAIL: 
        return {
            ...state,
            error:true 
        };
        default:
            return state;
    }
}

export default reducer;