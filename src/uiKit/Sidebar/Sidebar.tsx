import react, {useState} from "react"

import "./style.css";

import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"

import Sidebar from "react-sidebar";

interface IMenuItem{
    name: string;
}


interface ILobby{
    content: {
        name:string;
        link:string;
    }[];
}

interface ISidebar extends ILobby{
    closed:boolean;
}

export const ApplicationSidebar:react.FC<ISidebar> = (props) => {

    const phoneAdaptation = window.matchMedia("(min-width:880px)")

    const {url} = useRouteMatch();
    const [docked, setDocked] = useState(true);
    const [closed, setClosed] = useState(props.closed);

    phoneAdaptation.addListener(() => {
        setDocked(phoneAdaptation.matches)
    })

    return <Sidebar
        sidebar={<ApplicationSidebarRoute content={props.content}></ApplicationSidebarRoute>}
        open={closed}
        onSetOpen={setClosed}
        sidebarClassName={"sidebar__container"}
        docked={docked}
        shadow={false}
        >
        {props.children}
    </Sidebar> 
}

const ApplicationSidebarRoute:react.FC<ILobby> = (props) => {

    const {url} = useRouteMatch();

    let widgets = [];
    for (let i of props.content) {
        widgets.push(
            <Link to={`${url}/${i.link}`}>
                <div>{i.name}</div>
            </Link>
        )
    }

    return <div className="lobby__menu">
                <div className="lobby__heading">
                    EvgenApp
                </div>
                <div className="lobby-menu__content">
                    {widgets}
                </div>
            </div>
}