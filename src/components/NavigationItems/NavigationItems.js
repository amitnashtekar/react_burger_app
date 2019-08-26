import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationitems = (props) => {

    return (
        
            <ul className={classes.NavigationItems}>
            <NavigationItem to="/">Home </NavigationItem>
            <NavigationItem to="/orders">Orders </NavigationItem>
            </ul>
        
    )
}

export default navigationitems;