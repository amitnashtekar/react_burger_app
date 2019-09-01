import * as actionTypes from './actions';
import axios from '../../axios-orders';

export const addIngredients = (name) => {
    return {
        type:actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type:actionTypes.SET_INGREDIENTS,
        ings: ingredients
    }
}

export const fetcFailIngredients = () => {
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const removeIngredients = (name) => {
    return {
        type:actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    }
}

export const initIngredients = () => {
    return dispatch => {
          axios.get('/ingredients.json')
        .then(res => {
            dispatch(setIngredients(res.data));
        }).catch(err=>{            
            console.log(err);
            dispatch(fetcFailIngredients());
        })
    }
}