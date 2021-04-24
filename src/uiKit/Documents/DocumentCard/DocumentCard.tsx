import react, {useState} from "react"
import { FileWatcherEventKind } from "typescript";
import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"
import "./style.css";
import {useUpdateDocMutation} from "../../../generated/graphql"
import {Document} from "../Document/Document"

interface DocumentCardIE{
    id:string;
    content:string
}

export const DocumentCard:React.FC<DocumentCardIE> = (props)=>{
    let match = useRouteMatch();

    return(
        <div><Link to={match.url +"/" +  props.id}>{props.content}</Link></div>
    );
}