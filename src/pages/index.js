import * as React from "react"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import '../styles/_home.scss';

export default () => (
  <>
    <Layout>
      <div className="home">
        <Hero />
        <Services />
        <Experience />
        <Projects />
      </div>
    </Layout>
  </>
);
