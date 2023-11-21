import React from 'react'



/* 
export function Message() {
    return <h4 className="bg-success text-white text-center p-2"> This is a message  </h4>
}

*/
//----------------------------------------------------------------
/*
export function Message(props) {
	
	
	let classes= props.name=== "Mary" ? "bg-warning p-2" : "bg-success text-white text-center p-2"

	return <h4 className={classes}> {props.greeting} { props.name}  </h4>
	

}
*/
//----------------------------------------------------------------

export function Message(props) {

	let classes;

	switch(props.name){
		case "Mary":
			classes="bg-warning p-2"
			break
		case "Jhon":
			classes="bg-secondary text-white text-center p-2"
			break
		default:
			classes="bg-success p-2 text-white text-center"
			break
	}
	return <h4 className={classes}> 
	{props.greeting} { props.name}  
	</h4>
}