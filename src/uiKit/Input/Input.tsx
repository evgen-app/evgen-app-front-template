import React from 'react';
import "./style.css"

interface InputsConfig{
    placeHolder?:string;
    handleChange?:Function;
    value?:string;
    type?: string;
    class?:string;
};

export const DefaultInput : React.FC<InputsConfig> = (props) => {   
    const classes = "myInput " + (props.class == undefined ? "" : props.class); 
    return (
        <input className={classes} placeholder={props.placeHolder} onChange={
            (event)=> props.handleChange != undefined ? props.handleChange(event) : {}} 
            type={props.type} value={props.value!}></input>
    );
}