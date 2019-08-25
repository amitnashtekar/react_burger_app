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
        totalPrice:0
    }

    componentWillMount() {
        let ingredients = {};
        let params = new URLSearchParams(this.props.location.search);
        let totalPrice = 0;
        for(let param of params) {
            if(param[0] === 'totalPrice') {
                totalPrice = param[1]
            } else {
                ingredients[param[0]] = parseInt(param[1])
            }
            
        }
        //console.log(ingredients);
        this.setState({ingredients:ingredients,totalPrice:totalPrice});
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
                render = {(props) => (<Contactdata ingredients= {this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)}  />
            </div>
        )
    }
    
}

export default Checkout;