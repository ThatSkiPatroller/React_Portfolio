import React from 'react';
import {Typography} from '@material-ui/core';
import './style.css';

function Header (props) {
    const headOf = {
        color: 'rgb(117, 117, 115)',
        textShadow: '2px 0 white, 0 2px white, 1px 0 white, 0 1px white'
    }

    return(
        <div id='cntnr'>
            <Typography variant='h2' align='center' id='header' style={headOf}>
                {props.header}
            </Typography>
        </div>
    )
}

export default Header;