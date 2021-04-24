import react from "react";
import {DocumentCard} from "../../uiKit/Documents/DocumentCard/DocumentCard"
import {ApplicationSidebar} from "../../uiKit/Sidebar/Sidebar";
import {useGetMaterialsQuery} from "../../generated/graphql"
import { Route, useRouteMatch, Switch } from "react-router";
import {useUpdateDocMutation} from "../../generated/graphql"
import {Document} from "../../uiKit/Documents/Document/Document"

function createDoc(){
    
}

export const BaseScreen:react.FC = () => {
    let {url} = useRouteMatch();
    const {loading, data} = useGetMaterialsQuery({variables:{token:localStorage.getItem("token")}});

    if (loading){
        return <h1>Loading...</h1>
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
            <button onClick={}></button>
            <div>
                {data && data?.materialsByUser?.map( materials => 
                    <DocumentCard 
                        id={materials?.id == undefined? "нет":materials?.id}
                        content={materials?.content == undefined? "нет":materials?.content
                    }></DocumentCard>
                )}
            </div>
            </Route>
    </Switch>
            </ApplicationSidebar>
        
        </div>

    );
}