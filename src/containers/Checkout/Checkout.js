import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contactdata from '../ContactData/ContactData';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';



class Checkout extends Component {
    // state = {
    //     ingredients: {
    //         salad:0,
    //         bacon:0,
    //         cheese:0,
    //         meat:0
    //     },
    //     totalPrice:0
    // }

    // componentWillMount() {
    //     let ingredients = {};
    //     let params = new URLSearchParams(this.props.location.search);
    //     let totalPrice = 0;
    //     for(let param of params) {
    //         if(param[0] === 'totalPrice') {
    //             totalPrice = param[1]
    //         } else {
    //             ingredients[param[0]] = parseInt(param[1])
    //         }
            
    //     }
    //     //console.log(ingredients);
    //     this.setState({ingredients:ingredients,totalPrice:totalPrice});
    // }
    cancelCheckoutHandlr = () => {
        this.props.history.goBack();
    }
    continueCheckoutHandlr = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings} 
                onCancel = {this.cancelCheckoutHandlr}
                onContinue = {this.continueCheckoutHandlr}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                component = {Contactdata}  />
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps, null)(Checkout);