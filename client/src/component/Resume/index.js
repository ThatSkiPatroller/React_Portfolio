import React, { useState } from "react";
import pdfResume from '../../Assets/TraceResume.pdf';

import './style.css';

function Resume () {

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
      }
    return (
        <section class="blog section-padding bg-dark position-re" data-scroll-index="4">
            <div class="container">
                <div class="row">
                    
                    <div class="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <h4>My Resume</h4>
                    </div>

                    <embed class="pdfViewer" src='https://d1wedsacc4lfnu.cloudfront.net/TraceResume.pdf' type="application/pdf" height="900px" width="100%" />
                    
                </div>
            </div>
            {/* <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg> */}
        </section>
    )
}

export default Resume;