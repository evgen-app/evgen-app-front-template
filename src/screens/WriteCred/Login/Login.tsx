import React from "react";
import { DefaultButton } from "../../../uiKit/Button/Button";
import { DefaultInput } from "../../../uiKit/Input/Input";

import "./style.css"

import {useAuthMutation} from "../../../generated/graphql"

import {useHistory} from "react-router-dom";

import {UserAuth} from "../../../UserInteraction/UserAuth";


interface IEvent{
    target: {
        value: string
    }
}

export const Login_inputs:React.FC = () =>
{
    let name:string, password:string;
    let history = useHistory();
    const [setToken] = useAuthMutation({onCompleted:(data:any) => {
        UserAuth(data.tokenAuth.token)
        history.push("/")
    }});
    return <div className="inputs_flex">
        <DefaultInput handleChange={(e:IEvent) => {
            name = e.target.value;
        }} class="reg-input" placeHolder="Логин"></DefaultInput>
        <DefaultInput handleChange={(e:IEvent) => {
            password = e.target.value;
        }} class="reg-input" placeHolder="Пароль" type="password"></DefaultInput>
        <div className="password-refresh">Восстановить пароль</div>
        <DefaultButton handleClick={()=>{
            setToken({variables:{username:name, password:password}})
        }} class="reg-btn">
            Войти
        </DefaultButton>
    </div>
}