import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/heroImg2';
import ProjectContent from '../components/ProjectContent';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT." text="some of my most recent works" />
      <ProjectContent />
      <Footer />
    </div>
  )
}

export default Project

// 1:37