import React from 'react';
import {
  DPIconFacebookIcon,
  DPIconInstagramIcon,
  DPIconTwitterIcon,
} from '../../../icons';

const LandingFooter = () => {
  return (
    <div className="flex gap-10 justify-center items-center mt-10 lg:justify-end">
      <DPIconTwitterIcon />
      <DPIconFacebookIcon />
      <DPIconInstagramIcon />
    </div>
  );
};

export default LandingFooter;
