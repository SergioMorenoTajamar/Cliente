import React from 'react'
import { HooksButton } from './HooksButton';
import { SimpleButton } from "./SimpleButton";

export function Summary(props) {
    //props.name = `Name: ${props.name}` NO SE PUEDE MODIFICAR UNA PROPS
	{/* [<> </>]  alternativa a <React.Fragment>*/}
    return <>

		<td>{props.index + 1}</td>
		<td>{props.name}</td>
		<td>{props.name.length}</td>
		<td>
			<SimpleButton className="btn btn-warning btn-sm m-1" 
						  callback={props.reverseCallback} text={ `Reverse ${props.name}`} 
			/>
			{/*<SimpleButton className="btn btn-info btn-sm m-1" */}
			{/*			  callback={() => props.promoteCallback(props.name)} text={`Promote ${props.name}`}*/}
			{/*/>*/}
			<HooksButton className="btn btn-info btn-sm m-1" callback={() => props.promoteCallback(props.name)}
				text={`Promote [${props.name}] ` }
			/>
		</td>
	</> 
}