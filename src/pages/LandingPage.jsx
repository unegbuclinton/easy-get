import { motion } from 'framer-motion';
import React from 'react';
import LandingBody from '../components/molecules/landingpagecomp/LandingBody';
import LandingFooter from '../components/molecules/landingpagecomp/LandingFooter';
import NavBar from '../components/molecules/landingpagecomp/Nav';

const LandingPage = () => {
  return (
    <motion.div
      className="px-4 py-6 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <LandingBody />
      <LandingFooter />
    </motion.div>
  );
};

export default LandingPage;
