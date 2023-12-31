
import React, {useState} from 'react';

export function HooksButton(props){
	const[counter,setCounter]=useState(0)
	const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

	const handleClick = () => {
		setCounter(counter + 5);
		setHasButtonBeenClicked(true);
		props.callback();
	}
	return (
		<button onClick={handleClick}
			className={props.className}
			disabled={props.disable === "true" || props.disabled === true}
		>
			{props.text}{counter}
			{hasButtonBeenClicked && <div>Button clicked!</div>}
		</button>

	)
}