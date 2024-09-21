import React from "react";
import './Second.css';
function Second({image,title}) {
    return(
        <div className="card">
            <img src={image} alt="Card" className="card-image" />
            <div className="card-content">
                <h2>{title}</h2>
                {/* <p>{text}</p> */}
            </div>
        </div>
    );
}
export default Second;