import React from "react";
import "./home.css";
import MarqueeHome from "../marqueeHome/MarqueeHome";
import Methodology from "../methodology/methodology";
import ServicesSection from "../ServicesSection/ServicesSection";
import TechStackSection from "../TechStackSection/techStackSection";
import SuccessMetrics from "../successMetrics/successMetrics";
import Testimonials from "../testimonials/testimonials";
import ContactSection from "../contactSection/contactSection";
import FAQ from "../faq/faq";

import mailIcon from '../../assets/svg/mailIcon.svg';
import phoneIcon from '../../assets/svg/phoneIcon.svg';
import vevatechknologylogo from '../../assets/images/vevatechknologylogo.jpg';

import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.jpg";
// import banner3 from "../../assets/images/banner3.jpg";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };


  return (
      <>
      <header>
            {/* Announcement Bar */}
        <div className="announcement-bar_bg">
            <div className="container">
                <div className="announcement-bar">
                    <div className="announce_mail-id">
                        <a className="annou-mailID" href="mailto:info@vevatechnology.com">
                            <img src={mailIcon} alt="Mail Icon" width="24" />
                            info@vevatechnology.com
                        </a>
                    </div>
                    <div className="announce_mobile-no">
                        <img src={phoneIcon} alt="Mail Icon" width="24" />
                        <div className="annou_mail_phon-no">
                            <a className="annou-phoneNo_one sm_cls_announ" href="tel:+91 98270-37932">+91 98270-37932</a>
                            <a className="annou-phoneNo_two sm_cls_announ" href="tel:+91 90399-67932">+91 90399-67932</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="nav-bar_bg">
            {/* Navigation Bar */}
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={vevatechknologylogo} alt="veva techknology logo" width="100%" height="100%"/>
                    </div>

                    <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    </ul>

                    <div className="navi_btn_sec">
                        <button className="nav-btn">Get In Touch</button>
                    </div>
                </nav>
            </div>
        </div>
        
            <div className="banner-slider">
            <Slider {...sliderSettings}>

                {/* Slide 1 */}
                <div className="banner">
                <img src={banner1} alt="Banner 1" className="banner-img" />
                {/* <div className="banner-content">
                    <h1>We Apply Jobs For You</h1>
                    <p>Save time. Get hired faster.</p>
                    <button className="banner-btn">Get Started</button>
                </div> */}
                </div>

                {/* Slide 2 */}
                <div className="banner">
                <img src={banner2} alt="Banner 2" className="banner-img" />
                {/* <div className="banner-content">
                    <h1>Your Career, Our Responsibility</h1>
                    <p>Let experts handle job applications</p>
                    <button className="banner-btn">Apply Now</button>
                </div> */}
                </div>

                {/* Slide 3 */}
                {/* <div className="banner">
                <img src={banner3} alt="Banner 3" className="banner-img" />
                <div className="banner-content">
                    <h1>Focus on Skills, We Handle Applications</h1>
                    <p>Smart job application services</p>
                    <button className="banner-btn">Contact Us</button>
                </div>
                </div> */}

            </Slider>
            </div>

    </header>
    <MarqueeHome/>
    <Methodology />
    <ServicesSection/>
    <TechStackSection/>
    <SuccessMetrics/>
    <Testimonials/>
    <ContactSection/>
    <FAQ/>
    </>
  );
};

export default Home;
