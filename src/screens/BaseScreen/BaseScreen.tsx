import react from "react";
import {DocumentCard} from "../../uiKit/Documents/DocumentCard/DocumentCard"
import {ApplicationSidebar} from "../../uiKit/Sidebar/Sidebar";
import {useGetMaterialsLazyQuery, useGetMaterialsQuery} from "../../generated/graphql"
import { Route, useRouteMatch, Switch, useHistory } from "react-router";
import {useCreateDocMutation} from "../../generated/graphql"
import {Document} from "../../uiKit/Documents/Document/Document"
import {useState} from "react";
import { useLazyQuery, NetworkStatus } from "@apollo/client";
import {DefaultInput} from "../../uiKit/Input/Input"
import {DefaultButton} from "../../uiKit/Button/Button"


export const BaseScreen:react.FC = () => {
    const history = useHistory();

    const [createDoc, {data:doc, loading: loading_doc}] = useCreateDocMutation({
        onCompleted: () => {
            console.log(doc)
            if (doc != undefined){
                history.push(doc?.createDoc?.document?.id == undefined? "":doc?.createDoc?.document?.id)
            }
            window.location.reload();

        }
    })
    let {url} = useRouteMatch();
    let {loading, data} = useGetMaterialsQuery({variables:{token:localStorage.getItem("token")}});
    let [showModal, setShowModal] = useState(false)
    let [docName, setDocName] = useState("Новый документ")
    if (loading || loading_doc){
        return <h1>Loading...</h1>
    }
    const сreateDocument = () => {
        console.log( doc?.createDoc?.document)
        createDoc({
            variables:{
                token:localStorage.getItem("token"), 
                name:docName
            },
        
        });
        
    }


    return(
        <div>
            <ApplicationSidebar
                content={[
                    {
                        link: "",
                        name: "Мои файлы"
                    },
                    {
                        link: "",
                        name: "Создать"
                    }
                ]}
                closed={true}
                >
            <Switch>
            <Route path={`${url}/:docID`}>
                    <Document></Document>
            </Route>
            <Route path={url}>
            <DefaultButton handleClick={()=>setShowModal(true)}>создать новый документ</DefaultButton>
            {showModal == false? <div></div>:
            <div>
                <DefaultInput placeHolder="Введите имя документа" type="text"  handleChange={(e:any)=>setDocName(e.target.value)}></DefaultInput>
                <DefaultButton handleClick={()=>сreateDocument()}>Создать</DefaultButton>
            </div>
            }
            <div>
                {data && data?.materialsByUser?.map( materials => 
                    <DocumentCard 
                        id={materials?.id == undefined? "нет":materials?.id}
                        content={materials?.content == undefined? "нет":materials?.content}
                        name={materials?.name == undefined? "нет":materials?.name}
                    ></DocumentCard>
                )}
            </div>
            </Route>
    </Switch>
            </ApplicationSidebar>
        
        </div>

    );
}