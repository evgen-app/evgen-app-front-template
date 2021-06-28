import react, {useState} from "react"
import { FileWatcherEventKind } from "typescript";
import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"
import "./style.css";
import {Document} from "../Document/Document"
import {useDeleteDocMutation} from "../../../generated/graphql"


interface DocumentCardIE{
    id:string;
    content:string
    name:string
}

export const DocumentCard:React.FC<DocumentCardIE> = (props)=>{
    let match = useRouteMatch();
    const [delDoc]  = useDeleteDocMutation()
    return(
        <div><Link to={match.url +"/" +  props.id}>{props.name}</Link>
        
        <button onClick={() => {
            
            delDoc({variables:{id:props.id}})
            window.location.reload();
            
            }}>удалить</button>

        </div>
    );
}