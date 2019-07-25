import React from "react";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label"

const DefaultCheckbox = props => {
	let { keyID, label, clName, checked } = props 
    return (
    	<React.Fragment key={keyID}>
    		<Label htmlFor={keyID}>{label}</Label>
	        <Input
	        	type="checkbox"
	            className={clName}
	            checked={checked}
	            id={keyID}
	        />	    	
        </React.Fragment>    
    )
}

export default DefaultCheckbox