import React from 'react';
import {Typography} from '@material-ui/core';
// import './style.css';

function Header (props) {
    return(
        <div >
            <Typography variant='h2' align='center' id='header'>
                {props.header}
            </Typography>
        </div>
    )
}

export default Header;