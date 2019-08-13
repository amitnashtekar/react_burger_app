import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const ordersummary = (props) => {

    const summaryList = Object.keys(props.ingredients)
                        .map(key => {
                            return <li key={key}><span style={{'textTrasform':'uppercase'}}>
                            {key}</span>:{props.ingredients[key]}</li>
                        })
    return (
        <Auxi>
            <strong>Your Order!</strong>
            <p>it has following ingredients</p>
            <p>Want to continue?</p>
            {summaryList}
            <Button onClick={props.cancelOrder} type ='Danger'>Cancel</Button>
            <Button onClick = {props.purchaseContinue} type ='Success'>Continue</Button>
        </Auxi>
    )
}

export default ordersummary;