import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/heroImg2';
import AboutContent from '../components/AboutContent';
import MySkill from '../components/MySkill';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="Im a friendly front-End Developer" />
      <AboutContent />
      <MySkill />
      <Footer />
    </div>
  )
}

export default About