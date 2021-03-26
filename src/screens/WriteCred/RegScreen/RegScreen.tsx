import react from "react";

import "./style.css";
import {Login_inputs} from "../Login/Login";
import {Registration_inputs} from "../Registration/Registration";

import {CheckUser} from "../../../UserInteraction/CheckUser"

import {
    Link, Switch, Route, useRouteMatch, useLocation, Redirect
} from "react-router-dom";

export const RegScreen:react.FC = () => {
    const {path, url} = useRouteMatch();
    const location = useLocation();
    console.log(location);
    const isSign = location.pathname.split("/").pop() == "Login";
    if (CheckUser()) return <Redirect to=""></Redirect>
    return (
    <div className="centered">
        <div className="registration__container">
            <div className="heading-evgen-app">Добро пожаловать в EvgenApp</div>
            <div className="toggle__reg">
                <Link to="/enter-user/Login">                
                    <div className={"toggle-text " + (isSign ? "" : "disabled")}>Вход</div>
                </Link>
                <Link to="/enter-user/Registration">
                    <div className={"toggle-text " + (isSign ? "disabled": "")}>Регистрация</div>
                </Link>
            </div>
            <Switch>
                <Route path={`${url}/Login`}>
                    <Login_inputs></Login_inputs>
                </Route>
                <Route path={`${url}/Registration`}>
                    <Registration_inputs></Registration_inputs>
                </Route>
            </Switch>
            
        </div>
    </div>
    );
}