import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/footerlogo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container wrapper">
        {/* Footer Heading */}
        <div className="footer__header">
          <div className="footer__logo">
            <img src={logo} alt="footer logo" />
          </div>
          <div className="footer__nav">
            <h4 className="nav__heading">Fast Links</h4>
            <div className="nav__links">
              <div className="link1">
                <Link to="/about">About US</Link>
                <Link to="/about">Contact US</Link>
                <Link to="/account">Account Types</Link>
              </div>
              <div className="link2">
                <Link to="/trading">Platform</Link>
                <Link to="/terms">Resources</Link>
              </div>
            </div>
          </div>
          <div className="footer__btn">
            <button className="footer__lg-btn">Login</button>
            <button className="footer__oa-btn">Open Account</button>
          </div>
        </div>
        {/* Footer Content */}
        <div className="footer__content">
          <h4 className="fc__heading">Risk Warning:</h4>
          <hr />
          <p className="fc1">
            Trading in Forex and CFDs carries a high level of risk and can
            result in the loss of part or all of your investment. Trading in
            Forex and CFDs may not be appropriate for all investors. You should
            be aware of all the risks associated with Forex and CFD trading and
            seek for independent advice. Past performance does not constitute a
            reliable indication of future results. Forecasts for the future do
            not constitute a reliable indicator of future performance. Copyright
            for the pages and for the screens displaying the pages, and for the
            information, material and their arrangement, is owned by No name 1
            all rights reserved.
          </p>
          <p className="fc2">
            This information is intended for investors outside the United States
            who are not US/Japanese citizens and residents. This website is
            intended for informational purposes only. This website is not
            directed at any jurisdiction and is not intended for any use that
            would be contrary to local law or regulation. The products described
            on this are not offered and may not be sold in the United
            States/Japan or to US/Japanese citizens and residents.
          </p>
        </div>
        {/* Footer Copyright */}
        <div className="copyright">
          <p>© 2021 ALL right reserved No Name 1</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
