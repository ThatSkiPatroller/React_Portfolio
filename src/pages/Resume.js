import React from "react";
import Header from '../components/Header';
import AResume from '../components/Resume/TextResume.pdf';
import {Grid} from '@material-ui/core';

function Resume () {
    const div = {
        padding: '50px'
    }
    return (
        <div>
            <Header header='Resume' />
            <Grid align='center'>
                <embed src={AResume} width='950px' height='1000px'></embed>
            </Grid>
            <div style={div}/>
        </div>
    )
}

export default Resume;