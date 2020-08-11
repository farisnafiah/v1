import React from 'react';
import './App.css';

import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Academic from "./components/sections/Academic";
import Contact from "./components/sections/Contact";

import resumeData from './content/resumeData';

function App() {

  return (
    <>
      <Layout>
        <Hero data={resumeData.hero} />
        <About data={resumeData.about}/>
        <Work data={resumeData.work}/>
        <Academic data={resumeData.academic}/>
        <Contact data={resumeData.contact}/>
      </Layout>
    </>
  );
};

export default App;
