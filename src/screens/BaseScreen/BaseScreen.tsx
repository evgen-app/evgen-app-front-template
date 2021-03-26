import react from "react";

import {ApplicationSidebar} from "../../uiKit/Sidebar/Sidebar";

export const BaseScreen:react.FC = () => {
    return <ApplicationSidebar
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
    >
        fuck you
    </ApplicationSidebar>
}