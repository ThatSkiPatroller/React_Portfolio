import React from "react";
import Header from '../components/Header';
import AResume from '../components/Resume/MyResumeThatIsUpdated.pdf';
import {Styles} from '@material-ui/core';

function Resume () {
    return (
        <div>
            <Header header='Resume' />
            <embed src={AResume} width='950px' height='900px'></embed>
        </div>
    )
}

export default Resume;