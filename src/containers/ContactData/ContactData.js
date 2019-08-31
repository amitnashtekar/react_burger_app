import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';

class ContactData extends Component {

    state= {
        address: {
                    street: '',
                    zipcode:'',
                    country: ''
                },
        name: '',
        email:'',
        loading: false
    }
    placeOrder = () => {
        this.setState({loading:true})
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
        axios.post('/orders.json',order)
        .then(resp => {
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({loading:false});
        });
    }

    render() {
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
        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
               {form} 
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings:state.ingredients,
        totalPrice:state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);