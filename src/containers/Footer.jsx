import React, { useState } from 'react';




const Footer = () => {

  
    return (
        <>
            <div className='footer_elm my-3 footer_bg'>
                <div className='container-fluid footer'>
                    <div className='col-10 mx-auto row'>
                        <div className='col-lg-4 col-md-6'>
                        {/*<p >The Association of Civil Engineers, B.I.T. Sindri established in 2017 is an assortment of individuals who aim to acquaint you with the latest trends in the Civil Engineering field.</p> */}
                            <div className='logo'>
                                
                                <section id="footer">
                                    <div className="footer">
                                        <p className="footer-head">
                                            We should connect!
                                        </p>

                                        <div className="socials">
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-dribbble"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-facebook"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-instagram"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-youtube"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-twitter"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-medium"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-linkedin"
                                                aria-hidden="true"></i> </a>
                                        </div>

                                        <div className="tooltips">
                                            <button  >
                                                <span className="tooltiptext" id="myTooltip"> click to copy</span>
                                                <p className="email">
                                                    kumardharmveer399@gmail.com
                                                </p>
                                            </button>
                                        </div>
                                    </div>


                                </section>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6"></div>
                        <div class="col-lg-4 col-md-6">
                            <h6 class="text-uppercase font-weight-bolder mb-4"><b>Newsletter</b></h6>
                            <label> <p class=" mb-4">Enter your mail to get subscribed</p></label>
                            <div class="input-group">
                                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"></input>
                                <div className='input-group-append'>
                                    <button className='btn btn-link bg-white'>
                                        <i className="fa fa-send" style={{ height: '40px', width: '50px' }}></i>
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <p className='design my-3'>Designed By <a href="https://www.linkedin.com/in/dharm-veer-043743221/" target="blank" style={{ color: 'darkblue;', textDecoration: 'none' }}>Dharmveer Mahtha</a> </p>
                    <div>
                        <p className="dialogue">Crafted with ???? Moulded with ????</p>
                        <p className="copyright">Copyright ?? 2023????!</p>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Footer;