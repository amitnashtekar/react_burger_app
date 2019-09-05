import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandlr/withErrorHandlr';
import * as orderActions from '../../Store/Actions/index';
import {Redirect} from 'react-router-dom'

class ContactData extends Component {

    state= {
        address: {
                    street: '',
                    zipcode:'',
                    country: ''
                },
        name: '',
        email:''
        
    }
    placeOrder = (event) => {
        event.preventDefault();
        //this.setState({loading:true})
        const order = {
            ingredients: this.props.ings,
            customer: {
                address: {
                    street: 'test raod',
                    zipcode:'2122',
                    country: 'Australia'
                },
                name: 'Amit Ashtekar',
                email:'test@test.com'
            },
            deliveryMethod:'fastest',
            price:this.props.totalPrice.toFixed(2)
        }
        this.props.purchaseOrder(order);
        // axios.post('/orders.json',order)
        // .then(resp => {
        //     this.setState({loading:false});
        //     this.props.history.push('/');
        // })
        // .catch(err => {
        //     this.setState({loading:false});
        // });
    }

    

    render() {
        let ordePurchaed = this.props.purchased ? (<Redirect to="/" />) : null;
        let form = null;
        
        form=(
            <form>
                <input className = {classes.Input} tyep="text" name="name" placeholder="Your Name" />
                <input className = {classes.Input} tyep="email" name="email" placeholder="Your Mail" />

                <input className = {classes.Input} tyep="text" name="street" placeholder="Street" />

                <input className = {classes.Input} tyep="text" name="ZipCode" placeholder="ZipCode" />
                <input className = {classes.Input} tyep="text" name="Country" placeholder="Country" />
                <Button onClick={this.placeOrder} type ='Success'>Order</Button>
            </form>
        )
        if(this.props.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                {ordePurchaed}
                {form} 
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        purchased: state.order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        purchaseOrder: (orderData) => dispatch(orderActions.purchaseOrder(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));