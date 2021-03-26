import React from "react"
import { DefaultButton } from "../../../uiKit/Button/Button";
import { DefaultInput } from "../../../uiKit/Input/Input";

import "../Login/style.css"

import {useRegisterMutation} from "../../../generated/graphql";

import {useHistory} from "react-router-dom";

interface IEvent{
    target: {
        value:string;
    }
}
 

export const Registration_inputs:React.FC = () => {
    const history = useHistory();
    const [registerUser] = useRegisterMutation();
    let name_input:string, password_input:string;
    return <div className="inputs_flex">
        <DefaultInput handleChange={(e:IEvent) => {
            name_input = e.target.value;
        }} 
        class="reg-input" placeHolder="ФИО"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
        }} class="reg-input" placeHolder="E-mail"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
            password_input = e.target.value;
        }} class="reg-input" placeHolder="Password" type="password"></DefaultInput>
        
        
        <DefaultButton handleClick={()=>{
            registerUser({variables:{username:name_input, 
                password:password_input}});
            history.push("/enter-user/Login")
        }} class="reg-btn">
            Зарегистрироваться
        </DefaultButton>
    </div>
}