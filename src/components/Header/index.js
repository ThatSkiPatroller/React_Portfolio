import React from 'react';
import {Typography} from '@material-ui/core';

function Header (props) {
    return(
        <div>
            <Typography variant='h2' align='center'>
                {props.header}
            </Typography>
        </div>
    )
}

export default Header;