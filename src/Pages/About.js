import React, { useEffect } from "react"
import aboutImg from "../images/aboutusImg.png"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* About Us */}
      <section className="aboutus container">
        <div className="aboutus__heading">
          <h2>ABOUT US</h2>
        </div>
        <div className="aboutus__content">
          <div className="aboutus__content-section">
            <div className="aboutus__content-section-text">
              <p>
                No name 1 was launched a few years back with a unique vision to
                provide unparalleled advanced trading conditions, advanced
                education, and state-of-the-art trading tools in the Forex
                industry. Due to the continuous focus on localizing our products
                and services to suit each market, together with our successful
                collaboration with talented and experienced teams from all over
                the world. No name 1 was quickly established as the global
                trademark it is today.
              </p>
              <p>
                Our number one mission is centered on time. By valuing time and
                understanding the importance of efficiency in the fluctuating,
                lightning-fast world of financial markets, every decision we
                make is designed to ensure that our clients and business
                partners, as well as our team of professionals, invest their
                time wisely. This road is paved by an ironclad focus on
                educating our customers. Knowledge is power, and empowering
                traders to get the best value for their investments is our
                passion.
              </p>
            </div>
            <div className="aboutus__content-section-img">
              <img src={aboutImg} alt="aboutImage" />
            </div>
          </div>
          <p className="aboutus__content-info">
            At No name 1 we are committed to making sure all our clients and
            investors stay connected to the various opportunities that arise in
            the market on a daily basis and ease in connecting with one another.
            With No name 1 has your financial stockbroker you are sure to get
            all the professional backing and support you require to soar in
            Forex trading.
          </p>
        </div>
      </section>
      {/* Contact Us */}
      <section className="contact">
        <div className="wrapper container">
          <div className="contact__heading">
            <h2>How Can we Help?</h2>
            <p>Send Us A Message</p>
          </div>
          <form className="contact__form">
            <input type="text" placeholder="First Name" className="fname" />
            <input type="text" placeholder="Last Name" className="lname" />
            <input type="email" placeholder="Email Address" className="email" />
            <textarea placeholder="Meassage" className="message"></textarea>
            <button className="contact__form-btn">SEND</button>
          </form>
          <div className="contact__info">
            <div className="contact__info-section">
              <div className="contact__info-single">
                <img
                  src="https://img.icons8.com/ios-glyphs/40/ff6e52/worldwide-location.png"
                  alt="logo"
                />
                <p>Kärntner Ring 11-13 / 27, 9074 </p>
              </div>
              <div className="contact__info-single">
                <img
                  src="https://img.icons8.com/pastel-glyph/40/ff6e52/email.png"
                  alt="logo"
                />
                <p>support@no name 1.com </p>
              </div>
              <div className="contact__info-single">
                <img
                  src="https://img.icons8.com/ios-filled/40/ff6e52/apple-phone.png"
                  alt="logo"
                />
                <p>+441278226024</p>
              </div>
            </div>
            <div className="contact__info-single">
              <img
                src="https://img.icons8.com/fluency-systems-filled/40/ff6e52/clock--v1.png"
                alt="logo"
              />
              <p>Monday to Friday: 9:30-21:00 GMT </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
