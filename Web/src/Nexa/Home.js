import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="container-fluid bg-dark" id="lol">
        <div className="row">
          <div className="col-md-2 p-3">
           <Link to='/Home'> <img
              src="https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png"
              width={"100%"}
              height={""}
              className="rat"
            /></Link>
          </div>
          <div className="col-md-6 sam">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                {/* <a class="navbar-brand" >Navbar</a> */}
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item text-light">
                      <Link
                        class="nav-link active"
                        aria-current="page"
                        id="sam"
                      >
                        Services
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link to="/Ourwork" class="nav-link active" id="sam">
                        OurWork
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active" id="sam">
                        Industry
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active" id="sam">
                        Consulting
                      </Link>
                      {/* <Link class="nav-link active me-2 " >Product</Link> */}
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active" id="sam">
                        HubSpot
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active" id="sam">
                        Web3
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active" id="sam">
                        Video
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link to="/About" class="nav-link active" id="sam">
                        About
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link active " id="sam">
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link  active" id="sam">
                        Contact
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link  active" id="moon">
                        +971528692447
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link class="nav-link  active" id="moon">
                        SpeaktoUs
                      </Link>
                    </li>

                    <Link>
                      <i class="fa-solid fa-bars me-3"></i>
                    </Link>

                    <Link>
                      <i class="fa-solid fa-earth-americas"></i>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
            {/* <div className="col-md-6"> */}
            <video width="100%" muted autoplay="" loop="" playsinline="" poster="">
      <source src="https://445465.fs1.hubspotusercontent-na1.net/hubfs/445465/Digital_Nexa_2022/Website%20video%20gradient%20(1).mp4" type="video/mp4"/>
    </video>
    <h1 className="ear">Award-winning end-to-end digital</h1>
    <h1 className="rare">solutions for business growth</h1>
</div>
          

            
        </div>

        <div className="container"style={{marginTop:'10%'}}>
            <h3 className="bag" >Our people are our greatest strength.</h3>
            <h3 className="bag">Over 100 specialists around the world, our team works tirelessly to support clients irrespective of time zone.</h3>
            <h3 className="bag">We create and implement award-winning marketing, lead generation and sales strategies.</h3>
            <h3 className="bag">And we're 100% in-house.</h3>
            <h3 className="bag">Let us take your business to the next level.</h3>
            <h3 className="bar" >Dubai. New York. Manchester. Melbourne</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>What We Provide</h1>
            
                  <h6> Digital Marketing</h6>
                  <h6>Website Design & Development</h6>
                  <h6> Digital Campaigns & Lead Generation</h6>
                  <h6>HubSpot CRM, Marketing, Sales & Service</h6>
   
              <h6>Social Media Management</h6>
                 <h6>  Search Engine Optimization (SEO)</h6>
                     <h6> Web3, NFT Projects & Metaverse</h6>
                       <h6>Photography & Video Production</h6>
                     
                </div>
            </div>
        </div>
      </div>
  
  );
};

export default Home;
