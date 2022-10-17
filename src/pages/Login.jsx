import React from 'react';
import NavBar from '../components/molecules/landingpagecomp/Nav';
import LoginForm from "../components/molecules/logincomponent/LoginForm'";
import signupImg from '../icons/img/login-img.png';

const LoginPage = () => {
  return (
    <div className="px-4 py-6 md:px-20">
      <NavBar />
      <div className="flex flex-col lg:flex-row gap-2.5">
        <img
          src={signupImg}
          alt="skating"
          className="w-full mt-6 object-contain lg:w-2/4"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
