import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DPIconCancel, DPIconLogo, DPIconMenuBars } from '../../../icons';
import { LandingPageNav } from '../../../utilities/LandingPageNav';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <DPIconLogo />
        <p className="font-lemonada text-navy-blue hidden md:block">Easyget</p>
      </div>
      <ul className="hidden lg:block">
        {LandingPageNav.map(({ title, path }, idx) => (
          <Link
            key={idx}
            className="lg:ml-10 xl:ml-14 font-semibold text-navy-blue hover:border-b-2 "
            to={path}
          >
            {title}
          </Link>
        ))}
        <button
          onClick={() => navigate('/signup')}
          className="ml-14 font-semibold bg-navy-blue text-[#fff] py-3 px-6 rounded-lg hover:bg-[#fff] hover:text-[#170073]"
        >
          Sign Up
        </button>
      </ul>
      <span
        className="block lg:hidden z-10 fixed right-5"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        {toggleMenu ? <DPIconCancel /> : <DPIconMenuBars />}
      </span>

      <div
        className={`fixed top-0 left-0 flex flex-col items-center justify-center bg-[#fff] w-full h-screen transition ease-in-out delay-150 ${
          toggleMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {LandingPageNav.map(({ title, path }, idx) => (
          <Link
            key={idx}
            className=" font-semibold text-navy-blue mb-6 md:text-3xl"
            to={path}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
