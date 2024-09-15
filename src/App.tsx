import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Highlights from "./components/Highlights.tsx";
import Model from "./components/Model.tsx";

import * as Sentry from "@sentry/react"
import Features from "./components/Features.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Footer from "./components/Footer.tsx";

function App() {


  return (
      <main>
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWorks />
          <Footer />
      </main>
  )
}

export default Sentry.withProfiler(App)
