import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";

import '../styles/_home.scss';

export default () => (
  <>
    <Layout>
      <div className="home">
        <Hero />
        <Services />
        {/* <Jobs /> */}
      </div>
    </Layout>
  </>
);
