import { useState } from "react";

function Button(props) {
    return (
        <>
            <button className="typewriter-button">{props.num}</button>
        </>
    );
}

export default Button;
