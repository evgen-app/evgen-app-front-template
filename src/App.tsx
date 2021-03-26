import react from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import {RegScreen} from "./screens/WriteCred/RegScreen/RegScreen";
import {BaseScreen} from "./screens/BaseScreen/BaseScreen";

export const App:react.FC = () => {
    return <Router>
        <Switch>
            <Route path="/enter-user">
                <RegScreen></RegScreen>
            </Route>
            <Route path="">
                <BaseScreen></BaseScreen>
            </Route>
        </Switch>
    </Router>
}