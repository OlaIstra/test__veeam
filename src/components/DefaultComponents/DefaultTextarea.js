import React from "react";
import Textarea from "../UI/Textarea/Textarea";

const DefaultTextarea = props => {
	let { keyID, clName } = props
    return (
        <Textarea
        	key={keyID}
            className={clName}
        />
    )
}

export default DefaultTextarea
