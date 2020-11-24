import React from "react";
import './style.css';

const Container = (props) => {
    return(
        <div className="container-fluid">
            ${props.children}
        </div>
    )
}

export default Container;