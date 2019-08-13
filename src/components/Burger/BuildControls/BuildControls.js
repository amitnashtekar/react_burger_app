import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
  ];

const buildControls = (props) => (
    <div className={classes.BuildControls}>        
        <p>Price<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.type} 
            added={() =>props.ingredientAdded(ctrl.type)} 
            removed={() =>props.ingredientRemoved(ctrl.type)}
            disable = {props.disabled[ctrl.type]} />
        ))}
        <button className = {classes.OrderButton}
        disabled = {props.purchesable}>ORDER NOW{props.purchesable}</button>
    </div>
)

export default buildControls;