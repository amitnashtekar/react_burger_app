import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {



    let transformedIngredients = Object.keys( props.ingredients ).map((ingredientKey) => {
        //a new array with n number of indexes is created based on the value held by the key in the 'transformedIngredients' array
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {

            return <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />
        })
      }).reduce((arr,el)=>{
        return arr.concat(el)
      },[])
      if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p> 
      }
    return(
    <div className={classes.Burger} >
    <BurgerIngredients type="bread-top"></BurgerIngredients>
    {transformedIngredients}
    <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
    )
}

export default burger;