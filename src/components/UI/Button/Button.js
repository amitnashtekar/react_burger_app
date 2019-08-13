import React from 'react';
import clases from './Button.css';

const button =(props) => (

    <button
    className={[clases.Button,clases[props.type]].join(' ')}
    onClick={props.onClick}>{props.children}</button>
);

export default button