import React from "react";
import styles from "./styles.js";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  CTA,
  Clients,
  Testimonials,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
  <div className="h-screen" >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>
  </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
        <Business></Business>
        <Billing></Billing>
        <CardDeal></CardDeal>
        <Testimonials></Testimonials>
        <Clients></Clients>
        <CTA></CTA>
        <Footer></Footer>
      </div>
    </div>
  </div>
);
export default App;
