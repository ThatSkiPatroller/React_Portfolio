import React from "react";
import './style.css';

function Contact () {
    const attribElems = {
        "xmlns":"http://www.w3.org/2000/svg",
        "xmlns:xlink":"http://www.w3.org/1999/xlink"
    }
    
    return (
        <section class="contact section-padding position-re" data-scroll-index="5">
            <div class="container">
                <div class="row">
                    <div class="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <h4>Contact Me</h4>
                    </div>
                    <div class="col-lg-5">
                        <div class="info bg-img mb-md50" data-background="img/map.png">
                            <div class="item">
                                <div class="cont">
                                    <h6>Phone : </h6>
                                    <p>936-671-3228</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cont">
                                    <h6>Location : </h6>
                                    <p>Austin, Texas</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cont">
                                    <h6>Email : </h6>
                                    <p>t.suit@utexas.edu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-7">
                        <form class="form" id="contact-form" method="post" action="contact.php">
                            <div class="messages"></div>
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email" required="required"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="butn butn-bg"><span>Send Message</span></button>
                                    </div>
                                </div>                             
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
           
        </section>
    )
}

export default Contact;