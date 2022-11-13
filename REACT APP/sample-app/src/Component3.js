import React,{useContext} from 'react'
import AppContext from "./AppContext";
export default function Component3() {
    const context = useContext(AppContext);
    return (
        <div>
            {/* Component 3
            <ContextConsumer>
                {
                    (username)=>{
                        return <h2>{username}</h2>
                    }
                }
            </ContextConsumer> */}
            Component 3
            {/* <AppContext.Consumer>
                {
                    (username)=>{
                        return <h2>{username}</h2>
                    }
                }
            </AppContext.Consumer> */}
            <h2>{context}</h2>
        </div>
    )
}
