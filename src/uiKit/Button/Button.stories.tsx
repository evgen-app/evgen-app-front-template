import {DefaultButton} from "./Button";

import react from "react";


export const Default:react.VFC = () => {
    return <DefaultButton handleClick={() => {}}>Button</DefaultButton>
}

export default {
    title: "Default Widget/Buttons"
}