import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Account from "./Pages/Account"
import Home from "./Pages/Home"
import Terms from "./Pages/Terms"
import Trading from "./Pages/Trading"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/accounts" component={Account} />
        <Route path="/trading" component={Trading} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
