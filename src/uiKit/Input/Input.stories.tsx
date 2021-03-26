import react from "react";
import { DefaultButton } from "../Button/Button";

import {DefaultInput} from "./Input";

export const TextInput:react.VFC = () => {
    return <DefaultInput placeHolder="input" type="text"></DefaultInput>
}

export const PasswordInput:react.VFC = () => {
    return <DefaultInput placeHolder="password" type="password"></DefaultInput>
}

export default {
    title: "Default Widget/TextInputs"
}