import React from "react";
import "./style.css";

function Card (props) {
    return (
        <div className="row">
            <div className="col s6">
                <div className="card">
                    <div className="card-image">
                        <img src={props.image} alt={props.alt}></img>
                        <span className="card-title black-text"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}