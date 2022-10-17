import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-12 xl:mt-20 gap-6 md:gap-10 md:justify-center md:flex-row lg:justify-start">
      <button className="bg-navy-blue text-[#fff] px-5 py-3 rounded-lg font-semibold">
        Place orders
      </button>
      <button
        onClick={() => navigate('/signup')}
        className="bg-white text-[#000] border-2 border-navy-blue px-5 py-3 rounded-lg font-semibold"
      >
        Get started
      </button>
    </div>
  );
};

export default LandingButtons;
