import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="map">
        <div className="container-fluid bg-dark" id="lol">
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
                        <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                            <div class="dropdown">
                              <button
                                class="btn btn dropdown-toggle text-light"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Service
                              </button>
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                                id="worm"
                              >
                                <li>
                                  <a class="dropdown-item">Digital Marketing</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">
                                    Digital marketing consulting
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item">
                                    Digital Marketing Creation
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item">
                                    Website Design&Devepolment{" "}
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item">Social Media</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">
                                    Lead Generation & Campaigns
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item">HubSpot Service</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">SEO</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">video Production</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">Metaverse Service</a>
                                </li>
                                <li>
                                  <a class="dropdown-item">See all Service</a>
                                </li>
                              </ul>
                            </div>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item text-light">
                        <Link to="/Ourwork" class="nav-link active" id="sam">
                          OurWork
                        </Link>
                      </li>
                      <div class="dropdown">
                        <button
                          class="btn btn dropdown-toggle text-light"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Industry
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                          id="worm"
                        >
                          <li>
                            <a class="dropdown-item">B2B Marketing</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Education</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Automtive</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Healthcare</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Hospitality</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Real Estate</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Ecommerce</a>
                          </li>
                        </ul>
                      </div>
                      <li class="nav-item text-light">
                        <Link to ='/Consultancy' class="nav-link active" id="sam">
                          Consulting
                        </Link>
                       
                      </li>

                      <div class="dropdown">
                        <button
                          class="btn btn dropdown-toggle text-light"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          HubSpot
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                          id="worm"
                        >
                          <li>
                            <a class="dropdown-item">Hubspot For real Estate</a>
                          </li>
                          <li>
                            <a class="dropdown-item">HubSpot For Education</a>
                          </li>
                          <li>
                            <a class="dropdown-item">HubSpot For B2B</a>
                          </li>
                          <li>
                            <a class="dropdown-item">
                              HubSpot For B2C/Consumer
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item">HubSpot CRM-Overview</a>
                          </li>
                          <li>
                            <a class="dropdown-item">HubSpot CMS-Websites</a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn dropdown-toggle text-light"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web3
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                          id="worm"
                        >
                          <li>
                            <a class="dropdown-item">Metaverse Service</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Web 3.0 and NFT Service</a>
                          </li>
                          <li>
                            <a class="dropdown-item">
                              WEb3 & Metaverse White Paper
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item">Web3 Digest</a>
                          </li>
                          <li>
                            <a class="dropdown-item">
                              Introduction event to Metaverse & Web3
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item">
                              Gettting Started Workshop
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn dropdown-toggle text-light"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Video
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                          id="worm"
                        >
                          <li>
                            <a class="dropdown-item">Video Marketing</a>
                          </li>
                          <li>
                            <a class="dropdown-item">Video Studio</a>
                          </li>
                        </ul>
                      </div>
                      <li class="nav-item text-light">
                        <Link to="/About"><a class="nav-link active" id="sam">
                          About
                          </a></Link>
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

        <div className="container">
          <div className="row">
            <div className="col-md-6 " data-Aos="fade-right" id="dell">
              <p className="lap" id="brain">
                About Us
              </p>
              <div className="madam">
                {" "}
                <button className="btn btn-" id="snap">
                  speak to us
                </button>
              </div>
           
            </div>

            <div className="col-md-6 " data-Aos="fade-left" id="dell">
              <p className="kit" id="today">
                OUR MISSION
              </p>
              <p className="ink">
                "To help drive growth for forward thinking companies combining
                innovative Marketing, Sales & Service technology and strategies
                to maximise customer acquisition and retention opportunities”
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="tan">
          <div className="row">
            <marquee direction="left">
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%204.png?length=200&name=logo%204.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%207.png?length=200&name=logo%207.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%206.png?length=200&name=logo%206.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%209.png?length=200&name=logo%209.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%201.png?length=200&name=logo%201.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%203.png?length=200&name=logo%203.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/CBRE-logo-white.png?length=200&name=CBRE-logo-white.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%2010B.png?length=200&name=logo%2010B.png"
                className="me-5"
              />
              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%202.png?length=200&name=logo%202.png"
                className="me-5"
              />

              <img
                src="https://445465.fs1.hubspotusercontent-na1.net/hub/445465/hubfs/Digital_Nexa_2022/Images/Homepage/Logos/logo%206.png?length=200&name=logo%206.png"
                className="me-5"
              />
            </marquee>
          </div>
        </div>

        <div className="container text-white" id="tan">
          <p className="ban">
            NEXA is an award-winning Growth Agency established in 2005 with
            offices in the UAE, KSA, USA, UK, and Australia. We are also a
            founding member of the Digital Transformation Group (DXG), a
            strategic global alliance of 4 experienced HubSpot Solutions
            Partners with over 200 in-house experts. Established as a Specialist
            Growth Agency and Digital Marketing Agency, NEXA helps businesses
            achieve online success by creating measurable digital marketing
            strategies for customers across various industries.{" "}
          </p>
          <p className="ban">
            Our expert team will promote your business and connect your brand
            with potential customers using a variety of digital marketing tools
            and channels. We use transformative technology, content creation,
            search engine tactics, and more, to attract, engage, delight and
            convert high quality leads to increase your sales and grow your
            business.
          </p>
          <p className=" ban">
            {" "}
            NEXA is also an innovator in the rapidly expanding Web 3.0 space and
            understands and appreciates the magnitude of this internet
            evolution. With this in mind, we are at the forefront of Web 3.0
            commercial opportunities and provide a variety of services for
            leading brands as they make the transition into the Web 3.0
            revolution. The NEXA team has fully immersed itself into the Web 3.0
            arena and continues to pave the way for digital transformation in
            this space.
          </p>
          <div className="text-center">
            {" "}
            <button className="btn btn-" id="boom">
              view our case Studies
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row" data-Aos="fade-up">
           <div className="col-md-2 sad text-center" id="leg">
           <CountUp end={19} duration={5} />
        
            </div>
            <div className="col-md-2 sad text-center "id="leg">
              <CountUp end={5} duration={5} />
            </div>
            <div className="col-md-2 sad text-center"id="leg">
              <span>
                {" "}
                <CountUp end={300} duration={5} />+
              </span>
            </div>

            <div className="col-md-2 sad text-center"id="leg">
              <span>
                <CountUp end={2} duration={5} />%
              </span>
            </div>
            <div className="col-md-2 sad text-center"id="leg">
              <span>
                <CountUp end={100} duration={5} />+
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="dam">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital_Nexa_2022/Team/updated/DSC01929.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/DSC02438-Edit.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/DSC03396.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/DSC02451-Edit.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Sam.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Gary.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Mikita-min.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Dalia.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Ola.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Shams.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Nikhil.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Jamy-Lee-min.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Narita-3.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Yusuf-_1_.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Lavina-_1_.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Adeeb.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Aman-min.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Diksha.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Hina.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Ahmed%20M.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Dimple.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Khafija.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Sahaj.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Sona.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/change%20bg1.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/sara.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Emilia-Black-BG2.png"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" id="cat">
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Rita.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/change%20bg2.jpg"
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Digital%20Nexa/Team/Fady-min.webp"
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
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
    </div>
  );
};

export default About;
