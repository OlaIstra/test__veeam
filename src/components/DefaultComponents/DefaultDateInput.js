import React from "react";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label"

const DefaultDateInput = props => {
	let { keyID, label, clName, required } = props 

    return (
    	<React.Fragment key={keyID}>
    		<Label htmlFor={keyID}>{label}</Label>
	        <Input
	        	type="date"
	            className={clName}
	            required={required}
	            id={keyID}
	        />	    	
        </React.Fragment>    
    )
}

export default DefaultDateInput