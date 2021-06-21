import React from "react";
import Header from '../components/Header';
import AResume from '../components/Resume/TextResume.pdf';
import {Grid} from '@material-ui/core';

function Resume () {
    return (
        <div>
            <Header header='Resume' />
            <Grid align='center'>
                <embed src={AResume} width='950px' height='930px'></embed>
            </Grid>
        </div>
    )
}

export default Resume;