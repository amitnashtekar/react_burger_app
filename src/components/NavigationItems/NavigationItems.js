import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationitems = (props) => {

    return (
        
            <ul className={classes.NavigationItems}>
            <NavigationItem>amit </NavigationItem>
            <NavigationItem>amit12 </NavigationItem>
            </ul>
        
    )
}

export default navigationitems;