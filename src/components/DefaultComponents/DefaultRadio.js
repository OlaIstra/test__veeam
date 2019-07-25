import React from "react";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label"

const DefaultRadio = props => {
	let { keyID, label, clName, name } = props 

    return (
    	<React.Fragment key={keyID}>
    		<Label htmlFor={keyID}>{label}</Label>
	        <Input
	        	type="radio"
	            className={clName}
	            id={keyID}
	            name={name}
	        />	    	
        </React.Fragment>    
    )
}

export default DefaultRadio