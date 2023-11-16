
import React from "react";
import { CallbackButton } from "./CallBackButton";
import { HooksButton } from "./HooksButton";
import { SimpleButton } from "./SimpleButton";

/*import React from "react";*/

export function Summary(props) {
    //props.name = `Name: ${props.name}`;

    return <>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
        <td>
            <SimpleButton
                className="btn btn-warning btn-sm m-1"
                text={`Reverse (${props.name})`}
                callback={props.reverseCallback} />
            <HooksButton
                className="btn btn-info btn-sm m-1"
                callback={() => props.promoteCallback(props.name)}
                text={`Promote (${props.name})` }
            />
        </td>
    </>
}