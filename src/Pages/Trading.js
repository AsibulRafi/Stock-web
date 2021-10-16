import React from "react"
import hero from "../images/laptop.png"
import tradingInfo from "../images/tradingInfo.png"
const Trading = () => {
  return (
    <>
      {/* Hero */}
      <section className="trading__hero">
        <div className="container trading__hero-wrapper">
          <h2 className="trading__hero-heading">Trading Platform</h2>
          <button className="trading__hero-btn">GO TO WEB TRADER</button>
          <div className="trading__hero-image">
            <img src={hero} alt="trading__Image" />
          </div>
        </div>
      </section>
      {/* Tranding Info */}
      <section className="trading__info container">
        <h2 className="trading__info-heading">WEB TRADER</h2>
        <hr />
        <div className="trading__info-content">
          <p className="trading__info-text">
            No Name 1 highest purpose is to turn its clients into successful
            traders and increase their success rates as much as possible. For
            that purpose we give you the No Name 1 Online trader, which enables
            you to be 100% involved in the trading process and adjust according
            to the market conditions, all the while letting you plan your
            trading activities to your preference.Utilize the full scope of the
            latest technological developments in the field by trading from any
            internet connectible device. Investing in Forex, Commodities and CFD
            has never been easier thanks to the No Name 1 Online Trader.No Name
            1 grants you a gateway to all your trading needs with the online and
            mobile trading applications.
          </p>
          <div className="trading__info-section">
            <div className="trading__info-section-img">
              <img src={tradingInfo} alt="tradingInfo" />
            </div>
            <div className="trading__info-section-text">
              <p>
                They are extremely intuitive and functional, enabling you to
                start a trade whenever you want, from anywhere in the world. In
                case you already have a trading account you can start a trade
                immediately.
              </p>
              <p>
                The No Name 1 Online Trader present clients with the option to
                choose from a number of languages, it features the latest
                charts, fast operation of the trades, and best of all, it makes
                everything easy. You have the ability to access to trader from a
                number of different devices such as Apple or Android phone,
                tablet or PC. The platform is easy to use on every device and
                you can handle your investments with just a few clicks
              </p>
            </div>
          </div>
          <p className="trading__info-text">
            No Name 1 highest purpose is to turn its clients into successful
            traders and increase their success rates as much as possible. For
            that purpose we give you the No Name 1 Online trader, which enables
            you to be 100% involved in the trading process and adjust according
            to the market conditions, all the while letting you plan your
            trading activities to your preference.Utilize the full scope of the
            latest technological developments in the field by trading from any
            internet connectible device. Investing in Forex, Commodities and CFD
            has never been easier thanks to the No Name 1 Online Trader.No Name
            1 grants you a gateway to all your trading needs with the online and
            mobile trading applications.
          </p>
        </div>
      </section>
      <section className="trading__services container">
        <h2 className="trading__services-heading">The Service you Deserve</h2>
        <hr />
        <div className="trading__services-content">
          <div className="trading__services-content-section1">
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Have full control over your profile</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Perform in-depth market analysis</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Invest in a wide selection of asset</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Instant Execution</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Buy Limit, Buy Stop, Sell Limit, Sell</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Automated Trading</p>
            </div>
          </div>
          <div className="trading__services-content-section2">
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Slippage protection</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>3rd party bridging</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Availability of four pending orders</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Partial closing and many others</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>Automated Trading</p>
            </div>
            <div className="ts__services">
              <img
                src="https://img.icons8.com/ios-glyphs/40/ff6e52/checked--v1.png"
                alt="logo"
              />
              <p>0.01 lot sizes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trading
