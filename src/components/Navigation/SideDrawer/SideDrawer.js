import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';


const SideDrawer = (props) => {

let attachedClasses = [classes.SideDrawer, classes.Logo, classes.Close];
 if (props.open) {
     attachedClasses = [classes.SideDrawer, classes.Logo, classes.Open]; 
 }
 
 return(
    <Auxi>
        <Backdrop show={props.open} cancelOrder = {props.closed} />
        <div className = {attachedClasses.join(' ')}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Auxi>
 )
    
}

export default SideDrawer;