import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';

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

    render() {
        return(
            <div className={classes.ContactData}>
                <input className = {classes.Input} tyep="text" name="name" placeholder="Your Name" />
                <input className = {classes.Input} tyep="email" name="email" placeholder="Your Mail" />

                <input className = {classes.Input} tyep="text" name="street" placeholder="Street" />

                <input className = {classes.Input} tyep="text" name="ZipCode" placeholder="ZipCode" />
                <input className = {classes.Input} tyep="text" name="Country" placeholder="Country" />
                <Button  type ='Success'>Order</Button>


            </div>
        )
    }

}

export default ContactData;