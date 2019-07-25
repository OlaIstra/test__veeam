import React from "react";
import Button from "../UI/Button/Button"

const DefaultButton = props => {
	let { keyID, title, clName } = props 

    return (
        <Button
        	key={keyID}
            onClick={props.onClick}
            className={clName}
        >
            {title}
        </Button>
    )
}

export default DefaultButton