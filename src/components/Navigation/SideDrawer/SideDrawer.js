import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';

const SideDrawer = (props) => (
    <div className = {[classes.SideDrawer, classes.Logo].join(' ')}>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </div>
)

export default SideDrawer;