import React from "react";
import './style.css';

function Loading () {
    return (
        <div class="loading">
        <div class="gooey">
          <span class="dot"></span>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        </div>
    )
}

export default Loading;