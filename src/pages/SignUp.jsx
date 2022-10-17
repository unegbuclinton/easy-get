import React from 'react';
import NavBar from '../components/molecules/landingpagecomp/Nav';
import SignupForm from '../components/molecules/signupcomponent/SignupForm';
import signUp from '../icons/img/signup.png';

const SignUpPage = () => {
  return (
    <div className="px-4 py-6 md:px-20">
      <NavBar />
      <div className="flex flex-col lg:flex-row">
        <img
          src={signUp}
          alt="skating"
          className="w-full mt-6 object-contain lg:w-2/4"
        />
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
