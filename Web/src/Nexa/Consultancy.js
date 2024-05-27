import React, { useEffect } from "react";

import "../App.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
const Consultancy = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="map">
        <div className="container-fluid bg-dark" id="">
          <div className="row">
            <div className="col-md-5 p-3">
              <Link to="">
                {" "}
                <img
                  src="https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png"
                  width={"40%"}
                  height={""}
                  className="rat"
                />
              </Link>
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
                          About&nbsp;us
                        </Link>
                      </li>
                      <li class="nav-item text-light">
                        <Link to="" class="nav-link active" id="sam">
                          Our&nbsp;clients
                        </Link>
                      </li>
                      <li class="nav-item text-light">
                        <Link class="nav-link active" id="sam">
                          Our&nbsp;services
                        </Link>
                        {/* <Link class="nav-link active me-2 " >Product</Link> */}
                      </li>
                      <li class="nav-item text-light">
                        <Link class="nav-link active" id="sam">
                          Our&nbsp;methodology
                        </Link>
                      </li>
                      <li class="nav-item text-light">
                        <Link class="nav-link active" id="sam">
                          Our&nbsp;team
                        </Link>
                      </li>
                      <button className="btn btn-" id="with">
                        Get&nbsp;in&nbsp;touch
                      </button>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="card bg-dark text-white">
          <img
            src="https://www.digitalnexa.com/hubfs/pexels-fauxels-3184339.jpg"
            width={"100%"}
            height={"600px"}
            id="draw"
          />
          <div class="card-img-overlay">
            <h2 className="text-center cast">
              Elevate Your Business with Consultancy Rooted in{" "}
              <strong>Data-Driven Strategies,</strong>
            </h2>
            <h2 className="text-center tax">
              {" "}
              Backed by Psychology, and Refined by{" "}
              <strong>Agency Experience</strong>
            </h2>
            <div className="text-center ">
              {" "}
              <button className="btn btn-" id="with">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <h2 className="rain">About Us</h2>
              <p className="dull">
                At NEXA CONSULT, we are a dedicated team of marketing
                strategists and consultants committed to driving business
                success through tailored digital solutions. We are focused on
                delivering cutting-edge strategies and insights for businesses
                looking to enhance their digital footprint.
              </p>
              <br />
              <p className="dull">
                With a wealth of experience in Digital Marketing Strategy,
                Go-to-Market Strategy, Internal Branding Consultancy, Strategic
                Market Studies, Campaign Strategy, and Content Strategy, we are
                uniquely positioned to offer comprehensive and customized
                guidance. Our approach combines innovative thinking, deep
                industry knowledge, and a commitment to achieving measurable
                results.
              </p>

              <p className="dull">
                Partner with us to transform your marketing endeavors into
                impactful business outcomes.
              </p>
              <button className="btn btn-" id="the">
                Get in touch
              </button>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <img
                src="https://www.digitalnexa.com/hubfs/raw_assets/public/@marketplace/Drive_Web_Studio/Interactive/images/img2.jpg"
                width={"100%"}
                id="phone"
              />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-5 goal" id="mobile">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/digital-marketing-1.png?width=64&height=64&name=digital-marketing-1.png" />
              <h4>Digital Marketing Strategy</h4>
              <p className="dull">
                In today's digital age, a robust Digital Marketing Strategy is
                essential for any business seeking to make a significant impact
                online.
              </p>
              <p className="dull">
                {" "}
                Our approach involves a deep understanding of your brand,
                market, and objectives, enabling us to craft bespoke strategies
                that resonate with your target audience. We focus on leveraging
                the latest digital tools and analytics to create a comprehensive
                plan that encompasses various digital channels. Our goal is to
                drive meaningful engagement, enhance your online presence, and
                deliver measurable results that contribute to the growth and
                success of your business.
              </p>
              <p className="dull">
                Let us guide your digital journey with our expert strategy
                formulation
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>
            <div className="col-md-5 goal" id="come">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/market.png?width=64&height=64&name=market.png" />
              <h4>Go to Market Strategy</h4>
              <p className="dull">
                Launching a product or entering a new market requires a
                well-defined Go-to-Market (GTM) Strategy. Our team specializes
                in developing GTM strategies that are meticulously tailored to
                your unique business goals.
              </p>{" "}
              <p className="dull">
                We begin by conducting in-depth market research, analyzing
                competition, and identifying key opportunities. Our approach
                includes comprehensive market segmentation, pricing strategies,
                distribution channel selection, and marketing plans to ensure a
                successful market entry. With our GTM strategies, you can
                confidently introduce your offerings to the right audience,
                optimize revenue generation, and establish a strong market
                presence.
              </p>
              <p className="dull">
                Let us be your trusted partner in devising winning GTM
                strategies
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-5 goal" id="mobile">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/branding-1.png?width=64&height=64&name=branding-1.png" />
              <h4>Internal Branding Consultancy</h4>
              <p className="dull">
                Elevate your organization with our Internal Branding Consultancy
                service, where marketing and psychology converge. Our dedicated
                team, including esteemed doctors and researchers in the field,
                combines the art of marketing with insights from psychology. We
                delve deep into your company culture, values, and employee
                engagement to create tailored strategies.
              </p>
              <p className="dull">
                {" "}
                Our approach involves psychology-backed insights, employee
                engagement programs, and strategic communication. The result? A
                cohesive and motivated team that not only understands your brand
                but lives and breathes it. Transform your internal culture to
                reflect your brand's essence and drive business success.{" "}
              </p>
              <p className="dull">
                Collaborate with us to unlock the full potential of your
                internal branding.
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>

            <div className="col-md-5 ball" id="come">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/market-research.png?width=64&height=64&name=market-research.png" />
              <h4>Strategic Market Studies</h4>
              <p className="dull">
                In today's dynamic business landscape, staying ahead of the
                competition requires informed decision-making. Our Strategic
                Market Studies service empowers you with the insights you need
                to make strategic choices that drive growth. We specialize in
                conducting comprehensive market research and analysis to uncover
                key trends, opportunities, and threats.
              </p>
              <p className="dull">
                {" "}
                Our team goes beyond surface-level data to provide you with
                actionable recommendations. Whether you are exploring new
                markets, assessing market potential, or fine-tuning your
                existing strategies, our in-depth studies are your roadmap to
                success.
              </p>
              <p className="dull">
                {" "}
                Gain a competitive edge and make confident business decisions
                with the strategic market studies
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-5 goal" id="mobile">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/ads-campaign.png?width=64&height=64&name=ads-campaign.png" />
              <h4>Campaign Strategy</h4>
              <p className="dull">
                Crafting impactful campaigns that resonate with your target
                audience is at the heart of our Campaign Strategy service. We
                understand that successful campaigns are not just about
                creativity but also about strategic planning. Our team brings
                together the art of storytelling, data-driven insights, and a
                deep understanding of consumer behavior to develop campaigns
                that drive engagement and conversions.
              </p>
              <p className="dull">
                {" "}
                We start by defining clear objectives and target demographics,
                ensuring that every campaign is aligned with your business
                goals. From conceptualization to execution, we meticulously plan
                and execute campaigns across various channels, optimizing every
                step of the way. With our Campaign Strategy service, you can
                create memorable, results-driven campaigns that leave a lasting
                impression on your audience and boost your brand's visibility
                and impact.
              </p>
              <p className="dull">
                {" "}
                Let's collaborate to bring your campaigns to life.
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>

            <div className="col-md-5 goal" id="come">
              <img src="https://www.digitalnexa.com/hs-fs/hubfs/content%20(1).png?width=64&height=64&name=content%20(1).png" />
              <h4>Content Strategy</h4>
              <p>
                Unlock the power of compelling content with our Content Strategy
                service. We know that content is king in the digital landscape,
                and our team specializes in crafting strategies that resonate
                with your audience. We start by understanding your brand, target
                audience, and business goals to develop content plans that drive
                engagement and conversions.
              </p>{" "}
              <p className="dull">
                {" "}
                From blog posts to social media content, we guide you in
                creating content that not only informs but also captivates. Our
                approach includes content calendars, SEO optimization, and
                performance tracking to ensure your content strategy is a
                success. Elevate your brand's online presence with strategic
                content that tells your story effectively.
              </p>
              <p className="dul">
                {" "}
                Let's work together to craft a winning content strategy.
              </p>
              <button className="btn btn-" id="with">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "10%" }}>
          <div className="row">
            <div className="col-md-6 " data-aos="fade-up">
              <h2 className="help">Our Methodology: The Cognition Brain</h2>
              <p className="save">
                The Cognition Brain encompasses three essential systems: Data,
                Story, and Engagement. These systems mirror fundamental
                cognitive processes that shape decision-making. They also
                represent the core disciplines of Science, Storytelling, and
                Marketing. Our scientifically rigorous and commercially
                impactful approach utilises the Cognition Brain to develop
                strategies that boost brand awareness, launch and improve
                products, enhance online engagement, and structure tactical
                campaigns.
              </p>
              <button className="btn btn-" id="the">
                Get in touch
              </button>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img
                src="https://www.digitalnexa.com/hubfs/Capture-Jan-23-2024-11-37-43-9825-AM.jpg"
                id="mobi"
              />
            </div>
          </div>
        </div>

        <h1 className="say" data-aos="fade-right">
          The Cognition Scientific Board
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Dr%20Peter%20Hughes%20circle.png"
                width={"60%"} id="mark"
              />
              <h6 className="great">Dr. Peter Hughes</h6>
              <p className="dad">Psychologist</p>
            </div>
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Dr.%20Carl%20Senior%20circle.png"
                width={"60%"} id="mark"
              />
              <h6 className="great">Dr. Carl Senior</h6>
              <p className="dad">Behavioural Scientist</p>
            </div>

            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Georgia%20Alexandrou%20circle.png"
                width={"60%"} id="mark"
              />
              <h6 className="great">Georgia Alexandrou</h6>
              <p className="dad">Neuroscientist</p>
            </div>
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Sylvia%20Wong%20circle.png"
                width={"60%"}id="mark"
              />
              <h6 className="great">Dr. Sylvia Wong</h6>
              <p className="dad">Computer Scientist & Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Prof.%20Adrian%20Burgess%20circle.png"
                width={"60%"} id="mark"
              />
              <h6 className="great">Prof. Adrian Burgess</h6>
              <p className="dad">Psychologist & Cognitive Neuroscientist</p>
            </div>
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/James%20Reynolds%20circle.png"
                width={"60%"} id="mark"
              />
              <h6 className="great">Dr. James Reynolds</h6>
              <p className="dad">Behavioural Scientist</p>
            </div>

            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Kani%20circle.png"
                width={"60%"}id="mark"
              />
              <h6 className="great">Dr Kanimozhi Narayanan</h6>
              <p className="dad">Organsiational Psychologist</p>
            </div>
            <div className="col-5 col-md-6 col-xl-3">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Charlotte%20Pennington%20circle.png"
                width={"60%"}id="mark"
              />
              <h6 className="great">Dr. Charlotte Pennington</h6>

              <p className="dad">Social Psychologist</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-xl-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Daniel%20Shaw%20circle.png"
                width={"50%"}id="mark"
              />
              <h6 className="great">Dr Daniel J. Shaw</h6>

              <p className="dad">Cognitive Neuroscientist</p>
            </div>

            <div className="col-5 col-md-6 col-xl-4">
              <img
                src="https://www.digitalnexa.com/hubfs/Cognition%20Team/Nick%20Lee%20circle.png"
                width={"50%"} id="mark"
              />
              <h6 className="great">Professor Nick Lee</h6>
              <p className="dad">Professor of Sales & Marketing</p>
            </div>
          </div>
        </div>



      

        <div className="container-fluid text-center" id="that">
          <h1 className="paper" data-aos="fade-up">
            Get in Touch
          </h1>
          <p className="feel" data-aos="fade-up">
            Ready to elevate your marketing strategies to the next level with
            Nexa Consult? We'd love to hear from you. Feel free to reach out to
            us with any questions or to discuss how our strategic expertise can
            benefit your business. Your success is our priority, and we're here
            to help you achieve it.
          </p>
          <button className="btn btn-" id="with">
            get in touch
          </button>
        </div>

        <div className="container-fluid " id="">
          <div className="row">
            <div className="col-md-8 p-3">
              <img
                src="https://www.digitalnexa.com/hs-fs/hubfs/Digital%20Nexa/Home/Logo/BRC_NEXA_LOGO_WHITE%20(2)%20(1).png?width=393&height=88&name=BRC_NEXA_LOGO_WHITE%20(2)%20(1).png"
                width={"50%"}
                height={""}
                className="rat"
              />
            </div>
            <div
              className="col-md-4"
              style={{ marginTop: "3%", color: "white" }}
            >
              <i class="fa-brands fa-facebook-f  me-3 " width="50%"></i>
              <i class="fa-brands fa-linkedin-in  me-3"></i>
              <i class="fa-brands fa-twitter me-3"></i>
              <i class="fa-brands fa-instagram  me-3"></i>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Consultancy;
