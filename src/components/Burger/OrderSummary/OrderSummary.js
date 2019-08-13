import React from 'react';
import Auxi from '../../../hoc/Auxi';

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
            {summaryList}
        </Auxi>
    )
}

export default ordersummary;