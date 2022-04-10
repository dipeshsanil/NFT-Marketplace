import React from "react";

import "./style.css";

const Button = (props) => {
        return(
            <div>
                <button className="button">{props.name}</button>
            </div>
        );
}

export default Button;