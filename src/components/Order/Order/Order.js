import React from 'react';
import classes from './Order.css';


const Order = props => {
    let ingredients= [];
    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    let ingredientsOutput = ingredients.map(ingredient =>{
        return <span> {ingredient.name} :({ingredient.amount})</span>
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price:<strong>AUS {props.price}</strong></p>
        </div>
    )
}

export default Order;