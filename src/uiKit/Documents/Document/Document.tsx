import react, {useState} from "react"
import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"
import "./style.css";
import {MyUserComponentEditor} from "../TextEditor/TextEditor"
import {useUpdateDocMutation, useGetMaterialByIdQuery} from "../../../generated/graphql"
import {EditorState} from "draft-js"
import { convertFromRaw, convertToRaw } from 'draft-js';


export const Document:React.FC = () =>{

    const [updateDoc] = useUpdateDocMutation();

    const {docID} = useParams<{docID:string}>();

    const {loading, data} = useGetMaterialByIdQuery({variables:{id:docID}})
    if (loading){
        return <h1>loading...</h1>
    }
    if (data?.material == null){
        console.log("нет данных")
        return <Redirect to="/index"></Redirect>
    }


    function onChange(state:any){
        updateDoc({variables:{id:docID, content:JSON.stringify(convertToRaw(state))}})
    }
    // let a = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
    // updateDoc({variables:{id:docID, content:JSON.stringify(a)}})


    let state = convertFromRaw(JSON.parse(data.material.content))
    
    
    return (
        <div id="doc">
        <MyUserComponentEditor addComponents={true} state={state}  onChange={(e:any)=>onChange(e)}></MyUserComponentEditor>
        </div>     


    );
}