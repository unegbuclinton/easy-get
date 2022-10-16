import React from 'react';
import landingImg from '../../../icons/img/landing-img.png';
import LandingButtons from './LandingButtons';

const LandingBody = () => {
  return (
    <div className="flex flex-col-reverse items-center text-center  pt-12 lg:flex-row">
      <div>
        <h1 className="text-navy-blue font-bold text-2xl md:4xl lg:text-3xl lg:mt-12 lg:text-left  xl:text-5xl  xl:mt-24">
          Sit and relax while we go errands for your home
        </h1>
        <p className="text-navy-blue text-sm md:text-2xl lg:text-left mt-12 xl:mt-20 ">
          Relax and expect your delivery, let EasyGet do the work, with you
          feeling at ease. Fast and trustworthy
        </p>
        <LandingButtons />
      </div>
      <img
        src={landingImg}
        alt=""
        className="w-full md:10/12 lg:w-3/5 object-contain"
      />
    </div>
  );
};

export default LandingBody;
