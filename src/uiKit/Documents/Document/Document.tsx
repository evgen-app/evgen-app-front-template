import react, {useState} from "react"
import {
    useParams, useRouteMatch, Link, Switch, Route, Redirect
} from "react-router-dom"
import "./style.css";
import {MyUserComponentEditor} from "../TextEditor/TextEditor"
import {useUpdateDocMutation, useGetMaterialByIdQuery, useGetMaterialByIdLazyQuery} from "../../../generated/graphql"
import {EditorState} from "draft-js"
import { convertFromRaw, convertToRaw } from 'draft-js';
import { get } from "node:https";


export const Document:React.FC = () =>{

    const [updateDoc] = useUpdateDocMutation();

    const {docID} = useParams<{docID:string}>();

    const {loading, data} = useGetMaterialByIdQuery({variables:{id:docID}})
    if (loading){
        return <h1>loading...</h1>
    }
    if (!data){
        // console.log("нет данных")
        // return <Redirect to="/index"></Redirect>
        return <div>Loading.....</div>
    }


    function onChange(state:any){
        updateDoc(
                {
                variables:{
                    id:docID, state:JSON.stringify(convertToRaw(state)).toString(), 
                    name: data?.material?.name.toString() , 
                    content:"пп"
                },
            }
        )
        console.log(state)
        
    }
    // let a = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
    // updateDoc({variables:{id:docID, content:JSON.stringify(a)}})

    let State = convertFromRaw(JSON.parse(data?.material?.state!))
    
    
    return (
        <div id="doc">
        <MyUserComponentEditor addComponents={true} state={State}  onChange={(e:any)=>onChange(e)}></MyUserComponentEditor>
        </div>     


    );
}