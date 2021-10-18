import React, { useEffect, useState } from "react"
import tradeimg from "../images/tradeimg.png"
import round from "../images/fadedrounds.png"
import sliderImg1 from "../images/sliderImg1.png"
import sliderImg2 from "../images/sliderImg2.png"
import sliderImg3 from "../images/sliderImg3.png"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

const Home = () => {
  const data = [
    {
      id: 1,
      info: "For live assistance NO NAME1 Provides you with  24 hour support ",
      image: sliderImg1,
    },
    {
      id: 2,
      info: "Embrace every opportunity to trade - fast and reliale trade executions with transperent pricing",
      image: sliderImg2,
    },
    {
      id: 3,
      info: "Super fast speed in the execution of orders, with milion of oreders performed so far",
      image: sliderImg3,
    },
    {
      id: 4,
      info: "Futures is a broadly used trading instrument, which could be also defined thought-out as a forward contract.",
      image: sliderImg1,
    },
    {
      id: 5,
      info: "Take on the market with our innovative powerful platforms",
      image: sliderImg2,
    },
  ]
  const [info] = useState(data)
  const [index, setIndex] = useState(0)
  // Window Scroll to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const lastIndex = info.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, info])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <section>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__heading">
            <h2>Innovate power tools that aling with your goals</h2>
          </div>
          <hr />
          <div className="hero__text">
            <p>
              Trading in Forex, Metals, Indexes, Energies, Stocks, ETFs and
              Cryptocurrencies
            </p>
          </div>
          <button className="hero__btn">Get started</button>
        </div>
        <div className="hero__info">
          <div className="container hinfo">
            <h4>Stocks</h4>
            <h4>Forex</h4>
            <h4>Crypto</h4>
          </div>
        </div>
      </section>
      {/* Trade Info Section*/}
      <section className="trade__info container">
        <div className="trade__info-wrapper">
          <h2 className="ti__heading">A TRADE ORIENTED BROKER</h2>
          <p className="ti__text">
            No Name 1 is a top online Forex broker with many years of experience
            in the market. No name 1 being a client-oriented company, places the
            needs of every one of our customers as its own priority. We are
            committed to providing all our investors a wide range of options
            when trading to help them become better at trading and also make
            profits.At No name 1 we ensure all our clients are up to date with
            the market trends and also provide them with latest trading
            technology and Forex tools by investing continuously in innovations.
          </p>
          <div className="ti__info">
            <div className="ti__info-text">
              <p>
                These instruments are updated on a regular basis thereby
                offering new platforms and services to answer the various
                questions and meet the need of every trader, in so doing, we are
                keeping our promise and commitment towards a fair and open
                trading.
              </p>
              <p>
                All our trusted clients have a 24/7 access to our various
                comprehensive educational materials. These materials help
                trader’s understand and learn more about the various online
                operations, trading and the global market in general. We have a
                great customer support team which is always and readily
                available to assist with any issue you might encounter or
                challenge you might face in the course of trading.
              </p>
              <p>
                At No name 1 we place high importance and emphasis on customer
                satisfaction, and we are dedicated to being more than just an
                online broker to our clients. Make your trading experience worth
                it, choose a right broker, and choose No name
              </p>
            </div>
            <div className="ti__info-img">
              <img src={tradeimg} alt="tradeimg" />
            </div>
          </div>
        </div>
      </section>
      {/* Trade  Section */}
      <section className="trade">
        <div className="container trade__wrapper">
          <div className="trade__heading">
            <h2>Trade with us</h2>
            <p>
              No name 1 presents its clients with the optimal platform for
              investing in Forex, Futures and Commodities. We are committed to
              providing each and every client with the best experience possible
              and always aim to provide the necessary means and resources for
              successful trading.
            </p>
          </div>
          <div className="trade__content">
            <h2>No name provides you with:</h2>
            <div className="trade__content-cards">
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/003B7E/external-bell-twitter-flatart-icons-outline-flatarticons.png"
                  alt="icon"
                />
                <h4>Timely reports and indicators</h4>
                <p>
                  which let you follow how your trading develops with each
                  signal, along with vital success strategies
                </p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/ios/50/003B7E/guest-male.png"
                  alt="logo"
                />
                <h4>Various account options</h4>
                <p>
                  catering to each client`s specific circumstances. You can also
                  upgrade your account at a later stage
                </p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/external-becris-lineal-becris/50/003B7E/external-responsive-job-resume-becris-lineal-becris.png"
                  alt="icon"
                />
                <h4>Top notch trading platforms</h4>
                <p>
                  available on all relevant devices – PC, Mac, Android and Apple
                  phones.
                </p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/ios/50/003B7E/ingredients-list.png"
                  alt="logo"
                />
                <h4>Algorithmic Trading</h4>
                <p>
                  a computer program which aids you by making trading faster and
                  better overall
                </p>
              </div>

              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/dotty/50/003B7E/stocks-growth.png"
                  alt="logo"
                />
                <h4>Means for investing</h4>
                <p>
                  in Forex, futures and indices on a wide number of
                  international marketplaces.
                </p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/external-wanicon-lineal-wanicon/50/003B7E/external-setting-seo-and-web-wanicon-lineal-wanicon.png"
                  alt="logo"
                />
                <h4>Excellent client care</h4>
                <p>and technical support, which lets you focus on trading</p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/003B7E/external-support-advertising-kiranshastry-lineal-kiranshastry.png"
                  alt="logo"
                />
                <h4>A personalized Education System</h4>
                <p>massive amounts of trading information at your disposal</p>
              </div>
              <div className="trade___single-card">
                <img
                  src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/003B7E/external-database-big-data-itim2101-lineal-itim2101-5.png"
                  alt="logo"
                />
                <h4>Superior request </h4>
                <p>processing and spreads</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slider */}
      <section className="slider__section">
        {info.map((slide, sliderIndex) => {
          const { id, info, image } = slide
          let position = "nextSlide"
          if (sliderIndex === index) {
            position = "activeSlide"
          }
          if (
            sliderIndex === index - 1 ||
            (index === 0 && sliderIndex === info.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article className={position} key={id}>
              <div
                className="slider"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="slider__wrapper container">
                  <div className="slider__card">
                    <h2 className="slider__card-heading">{info}</h2>
                    <button className="slider__card-btn">Learn More</button>
                    <button
                      className="prev"
                      onClick={() => setIndex(index - 1)}
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className="next"
                      onClick={() => setIndex(index + 1)}
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>
      {/* Steps */}
      <section className="steps container">
        <div className="steps__wrapper">
          <h2 className="steps__heading">
            STEPS FOR OPENING A NO NAME 1 TRADING PROFILE
          </h2>
          <hr />
          <div className="steps__contents">
            {/* Single Steps */}
            <div className="steps__item1">
              <h1 className="steps__item1-number">1</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item1-heading">
                Pick the account types depending on your objectives and needs
              </h4>
              <p className="steps__item1-text">
                Three available account types are supplemented with lots of
                additional features that bring some extra pluses to the
                investor. You can easily sign up for any of them. And keep the
                notice that you can change the account type after putting money
                on your acc.
              </p>
            </div>
            <div className="steps__item2">
              <h1 className="steps__item2-number">2</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item2-heading">
                Fill out the demanded information and confirm your identity
              </h4>
              <p className="steps__item2-text">
                You just need to complete information profile with your personal
                data and to provide some identity papers.
              </p>
            </div>
            <div className="steps__item3">
              <h1 className="steps__item3-number">3</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item3-heading">
                Depositing money into your{" "}
                <Link to="/accounts" className="steps__item3-heading-acc">
                  account
                </Link>
              </h4>
              <p className="steps__item3-text">
                Once we approve and authorize your application, you will be able
                to make your payments and withdrawals swiftly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="about">
        <div className="container about__wrapper">
          <div className="about__heading">
            <h2>Why should you choose to trade with us?</h2>
            <p>
              Your goals are unique, so your investment guidance should be too.
              This is why at No Name 1 we take the time to listen and understand
              what matters most to you before helping you develop and manage
              your investment strategy.
            </p>
          </div>
          <div className="about__content">
            <div className="about__card">
              <h2>INTUITIVE TOOLS AND COMPETITIVE PRICING</h2>
              <p>
                Whether you’re an active trader or long-term investor our web,
                mobile, and downloadable platforms give you everything you need
                to research stocks, place trades, and manage your portfolio with
                live-streaming access, real-time quotes and specialists with
                years of floor trading experience. As an No name 1 broker, we do
                not have any conflict of interest regarding our clients’ trades,
                as we only receive a commission on the volume of the trades and
                do not benefit in any additional way by any client losses.
              </p>
            </div>
            <div className="about__card">
              <h2>TRANSPARENT AND TRUSTWORTHY</h2>
              <p>
                For a few years now, No Name 1 has been proud to help our
                clients pursue their financial goals while giving them more time
                to focus on what really matters in life. Everything we provide,
                from guidance to powerful trading tools, to retirement resources
                is built around one thing, you. We know it’s important to get
                professional guidance you can trust. That’s why our experienced,
                licensed reps are available by phone, email, online, and in
                person for one-on-one support when you need it most. You can
                always count on us.
              </p>
            </div>
            <div className="about__card">
              <h2>SECURED FUNDS</h2>
              <p>
                Your funds are kept in segregated 3rd party regulated financial
                institutions and we use advanced encryption tools to keep all of
                your transactions and personal data safe and secured. Also our
                flat-rate commission on all online equity trades gives you
                access to our award-winning investing and trading experience.
                Plus, we keep our pricing simple with no share limits or hidden
                fees, no trade requirements to access advanced features, and no
                deposit minimums. At No name 1 all transactions are simple and
                direct.
              </p>
            </div>
            <div className="about__card">
              <h2>ALGO TRADING</h2>
              <p>
                Algorithmic Trading is a program that offers everyone the
                opportunity to trade with better precision and high success rate
                than he/she would normally get. It makes use of a scenario-based
                approach and artificial intelligence so as to develop the best
                trading approach for the circumstances. Different variables such
                as price, quantity and time period are taken into serious
                consideration as well. The number of traders that use our
                Algorithmic trading keeps increasing by the day, as it makes the
                trading journey easy and well-profiting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
