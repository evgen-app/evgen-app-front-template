import react from "react";

import {ApplicationSidebar} from "./Sidebar";

import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

export const Sidebar:react.VFC = () => {
    return <Router>
        <Switch>
            <Route path="">
            <ApplicationSidebar
        content={[
            {
                link: "",
                name: "name1"
            },
            {
                link: "",
                name: "name2"
            }
        ]}
        closed={true}
    ></ApplicationSidebar>
            </Route>
        </Switch>
    </Router> 
    
    
}

export default {
    title: "Sidebar"
}