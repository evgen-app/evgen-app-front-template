import react from "react";

import {MyToogleButton} from "./ToggleButton";

import {BrowserRouter as Router} from "react-router-dom";

export const ToggleButton:react.VFC = () => {
    return <Router>
            <MyToogleButton handleChange={()=>{}} buttons={[{
        name:"name1", link:""
    },
    {
        name:"name1", link:""
    } 
    ]}></MyToogleButton>

    </Router>

}

export default {
    title:"Default Widget/Toggle Button"
}