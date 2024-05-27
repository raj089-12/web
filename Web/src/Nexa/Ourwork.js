import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
const Ourwork = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-1 p-3">
            <Link to="/Home">
              {" "}
              <img
                src="https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png"
                width={"150%"}
                height={""}
                className="rat"
                id="mob"
              />
            </Link>
          </div>
          <div className="col-md-10 sam">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
            
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
                    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <div class="dropdown">
  <button class="btn btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Service
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='worm'>
    <li><a class="dropdown-item">Digital Marketing</a></li>
    <li><a class="dropdown-item">Digital marketing consulting</a></li>
    <li><a class="dropdown-item">Digital Marketing Creation</a></li>
    <li><a class="dropdown-item">Website Design&Devepolment </a></li>
    <li><a class="dropdown-item">Social Media</a></li>
    <li><a class="dropdown-item">Lead Generation & Campaigns</a></li>
    <li><a class="dropdown-item">HubSpot Service</a></li>
    <li><a class="dropdown-item">SEO</a></li>
    <li><a class="dropdown-item">video Production</a></li>
    <li><a class="dropdown-item">Metaverse Service</a></li>
    <li><a class="dropdown-item">See all Service</a></li>
  </ul>
</div>
</ul>
</div></li>
                    <li class="nav-item text-light">
                      <Link to="/Ourwork" class="nav-link active" id="sam">
                        OurWork
                      </Link>
                    </li>
                    <div class="dropdown">
  <button class="btn btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Industry
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='worm'>
    <li><a class="dropdown-item">B2B Marketing</a></li>
    <li><a class="dropdown-item">Education</a></li>
    <li><a class="dropdown-item">Automtive</a></li>
    <li><a class="dropdown-item">Healthcare</a></li>
    <li><a class="dropdown-item">Hospitality</a></li>
    <li><a class="dropdown-item">Real Estate</a></li>
    <li><a class="dropdown-item">Ecommerce</a></li>
  </ul>
</div>
                    <li class="nav-item text-light">
                      <Link to ='/Consultancy' class="nav-link active" id="sam">
                        Consulting
                      </Link>
                      {/* <Link class="nav-link active me-2 " >Product</Link> */}
                    </li>
                   
                    <div class="dropdown">
  <button class="btn btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   HubSpot
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='worm'>
    <li><a class="dropdown-item" >Hubspot For real Estate</a></li>
    <li><a class="dropdown-item" >HubSpot For Education</a></li>
    <li><a class="dropdown-item" >HubSpot For B2B</a></li>
    <li><a class="dropdown-item">HubSpot For B2C/Consumer</a></li>
    <li><a class="dropdown-item">HubSpot CRM-Overview</a></li>
    <li><a class="dropdown-item">HubSpot CMS-Websites</a></li>
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Web3
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='worm'>
    <li><a class="dropdown-item">Metaverse Service</a></li>
    <li><a class="dropdown-item">Web 3.0 and NFT Service</a></li>
    <li><a class="dropdown-item">WEb3 & Metaverse White Paper</a></li>
    <li><a class="dropdown-item">Web3 Digest</a></li>
    <li><a class="dropdown-item">Introduction event to Metaverse & Web3</a></li>
    <li><a class="dropdown-item">Gettting Started Workshop</a></li>  
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Video
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id='worm'>
    <li><a class="dropdown-item">Video Marketing</a></li>
    <li><a class="dropdown-item">Video Studio</a></li> 
  </ul>
</div>
                    <li class="nav-item text-light">
                      <Link to="/About" class="nav-link active" id="sam">
                        About
                      </Link>
                    </li>
                    <li class="nav-item text-light">
                      <Link to="/Blog" class="nav-link active " id="sam">
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
     

      <div class="card bg-dark text-white">
        <img
          src="https://media.istockphoto.com/id/694960328/photo/male-hands-on-a-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=rKnaYrqm7cmMfA6SMNr_FwdXEuGrwpqFG2K1mPp81wY="
          width={"100%"}
          height={"400px"}
          id="draw"
        />
        <div class="card-img-overlay" data-Aos="fade-up">
          <h1 class="text-center" id="pure">
            Case Studies & Portfolio
          </h1>
          <div className="text-center">
            <span className="">
              {" "}
              <button className=" btn btn-" id="poor">
                Home
              </button>
              Case Studies & Portfolio
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row what">
          <div className="col-md-6">
            <p className="global">CLIENT SUCCESS IS OUR SUCCESS </p>
            <h2 className="keen"> The Proof is in the Project</h2>
          </div>
          <div className="col-md-6">
            <strong>
              <p className="more">
                Would you like to see some examples of what we can do for you?
              </p>
            </strong>
            <p className="few">
              At Nexa, we have the skill and know-how to design, develop and
              execute projects that boost your brand. We are a team of keen
              strategists who strive to stay on top of design trends and enable
              technologies to assist our clients in achieving quality lead
              generation and conversion goals.
            </p>
            <p className="few">
              With over 300 active global clients, it is impossible to showcase
              all our work, but we have included a few samples to highlight our
              abilities.
            </p>
            <p className="more">
              <strong>Please reach out to us if you want to see more.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIvztcV8Wj0jDUEif_hNEZZpRatxUtZaTZwGYrdeQpX-drt1cHooAdydbedHCoUqNhKE&usqp=CAU"
                width={"100%"}
                height={"400px"}
             id="visit"
              />
              <div class="card-img-overlay">
                <h2 class="card-title text-center" id="date">
                  WEBSITES
                </h2>
                <div className="text-center"> <h6 className="text-center" id="case">VIEW OUR CASE STUIDES</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src="https://www.oberlo.com/media/1603954182-seo-article-header.png"
                width={"100%"}
                height={"400px"}
                id="place"
              />
              <div class="card-img-overlay">
                <h1 class="card-title text-center " id="date">
                  SEO
                </h1>
                <div className="text-center"><h6 className="text-center" id="case">VIEW OUR CASE STUIDES</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src="https://www.projectcubicle.com/wp-content/uploads/2021/02/What-is-Data-Analytics-How-to-use.jpg"
                width={"100%"}
                height={"400px"}
                id="india"
              />
              <div class="card-img-overlay">
                <h2 class="card-title text-center" id="date">
                  LEAD GENERATION
                </h2>
                <div className="text-center">  <h6 className="text-center" id="case">VIEW OUR CASE STUIDES</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJNcUGp-fqQMX0IYBxFjesQe2JDIaS8cdUlxLf0BBvw&s"
                width={"100%"}
                height={"400px"}
                id="india"
              />
              <div class="card-img-overlay">
                <h2 class="card-title text-center" id="date">
                  SOCIAL
                </h2>
                <div className="text-center">  <h6 className="text-center" id="case">VIEW OUR CASE STUIDES</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3gM2rRF3_dtXEBSWqrTO8mO7UFFZEOQ02xpLMY_Imzu_0NM6BiFuG3IZtiAjtmR_biQ&usqp=CAU"
                width={"100%"}
                height={"400px"}
                
              />
              <div class="card-img-overlay">
                <h2 class="card-title text-center" id="date">
                  VIDEO
                </h2>
                <div className="text-center"><h6 className="text-center" id="case">VIEW OUR CASE STUIDES</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
            <div class="card text-white">
              <img
                src="https://teamstepup.com/wp-content/uploads/2017/03/hubspot.jpg"
                width={"100%"}
                height={"400px"}
                
              ></img>
              <div class="card-img-overlay">
                <h2 class="card-title text-center" id="date">
                  HUBSTOP
                </h2>
              <div className="text-center"><h6 className="" id="case">VIEW OUR CASE STUIDES</h6>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container-fluid text-center" id="lamp">
        <span className="pen">Need a quote?</span>
        <br />
        <span className="pen">Just ask…</span>
        <p className="man">
          Get in touch with us if you have a web development or digital
          marketing project that you would like to get underway!
        </p>
        <button className="btn btn-" id="jam">
          Get your quote now
        </button>
      </div>

      <div className="container-fluid mt-5 book">
        <div className="row">
          <div className="col md-3 sun ">
            <h5>Services</h5>
            <p>Digital Strategy Creation</p>
            <p>Website Design & Development</p>
            <p>Lead Generation & Sales Campaigns</p>
            <p>Brand Awareness & Visibility</p>
            <p>Content Creation & Distribution</p>
          </div>
          <div className="col-md-3">
            <h5>HubSpot</h5>
            <p>Sales & CRM</p>
            <p>HubSpot Marketing</p>
            <p>HubSpot Service Hub</p>
            <p>HubSpot Training</p>
            <p>HubSpot Setup</p>
          </div>

          <div className="col-md-3">
            <h5>Industry</h5>
            <p>B2B Marketing</p>
            <p>Education</p>
            <p>Automotive</p>
            <p>Healthcare</p>
            <p>Hospitality</p>
            <p>Real Estate</p>
            <p>E-Commerce</p>
          </div>
          <div className="col-md-3">
            <h5>Video</h5>
            <p>Video Marketing</p>
            <p>Video Studio</p>
            <h5>Follow us</h5>
            <i class="fa-brands fa-facebook-f  me-3"></i>
            <i class="fa-brands fa-linkedin-in  me-3"></i>
            <i class="fa-brands fa-instagram  me-3"></i>
            <i class="fa-brands fa-x-twitter me-3"></i>
            <i class="fa-brands fa-youtube me-3"></i>
            <i class="fa-brands fa-pinterest-p  me-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
