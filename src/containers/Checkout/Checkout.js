import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contactdata from '../ContactData/ContactData';
import {Route} from 'react-router-dom';



class Checkout extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
    }

    componentDidMount() {
        let ingredients = {};
        let params = new URLSearchParams(this.props.location.search);
        for(let param of params) {
            ingredients[param[0]] = parseInt(param[1])
        }
        //console.log(ingredients);
        this.setState({ingredients:ingredients});
    }
    cancelCheckoutHandlr = () => {
        this.props.history.goBack();
    }
    continueCheckoutHandlr = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                onCancel = {this.cancelCheckoutHandlr}
                onContinue = {this.continueCheckoutHandlr}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                component = {Contactdata} />
            </div>
        )
    }
    
}

export default Checkout;