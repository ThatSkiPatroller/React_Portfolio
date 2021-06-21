import React from 'react';
import { Button } from '@material-ui/core';
import './style.css';

function Animations () {
    function makeItSnow () {
            var snowing = document.createElement('i');
            snowing.classList.add('fas');
            snowing.classList.add('fa-snowflake');
            snowing.style.left = Math.random() * window.innerWidth + 'px';
            snowing.style.animationDuration = 4 + 's';
            document.body.appendChild(snowing);
    } 
    
    return (
        <div>
            <section id="rain"></section>
            <section id="snow"></section>
            <Button onClick={() => makeItSnow()}><span>Make it snow!</span></Button>
            <Button><span>Make it rain!</span></Button>
        </div>
    )
}

export default Animations