import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CustomerSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
                <div>Here is your Order to checkout!! Enjoy !!</div> 
                <div>
                    <Burger ingredients={props.ingredients}/>
                    <Button onClick={props.onCancel} type ='Danger'>Cancel</Button>
                    <Button onClick = {props.onContinue} type ='Success'>Continue</Button>
                </div>
        </div>
    )
}
export default CustomerSummary