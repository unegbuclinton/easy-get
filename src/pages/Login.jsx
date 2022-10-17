import React from 'react';
import NavBar from '../components/molecules/landingpagecomp/Nav';
import LoginForm from "../components/molecules/logincomponent/LoginForm'";
import signupImg from '../icons/img/login-img.png';

const LoginPage = () => {
  return (
    <div className="px-4 py-6 md:px-20">
      <NavBar />
      <div className="flex flex-col lg:flex-row lg:gap-32">
        <img
          src={signupImg}
          alt="skating"
          className="w-full h-96 mt-6 object-contain lg:w-5/12 lg:h-full"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
