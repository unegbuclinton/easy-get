import React from 'react';

const LandingButtons = () => {
  return (
    <div className="flex flex-col mt-12 xl:mt-20 gap-6 md:gap-10 md:justify-center md:flex-row lg:justify-start">
      <button className="bg-navy-blue text-[#fff] px-5 py-3 rounded-lg font-semibold">
        Place orders
      </button>
      <button className="bg-white text-[#000] border-2 border-navy-blue px-5 py-3 rounded-lg font-semibold">
        Get started
      </button>
    </div>
  );
};

export default LandingButtons;
