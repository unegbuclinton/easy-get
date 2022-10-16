import React from 'react';
import LandingBody from '../components/molecules/landingpagecomp/LandingBody';
import LandingFooter from '../components/molecules/landingpagecomp/LandingFooter';
import NavBar from '../components/molecules/landingpagecomp/Nav';

const LandingPage = () => {
  return (
    <div className="px-4 py-6 md:px-20">
      <NavBar />
      <LandingBody />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
