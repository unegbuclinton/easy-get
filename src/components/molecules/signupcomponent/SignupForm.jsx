import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DPIconGoogleIcon } from '../../../icons';

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 mt-12">
      <h1 className="text-2xl font-bold lg:text-4xl">Create an account</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="border-b	border-[#170073] mt-12 pb-2 outline-0 "
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border-b	border-[#170073] mt-12 pb-2 outline-0 "
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b	border-[#170073] mt-12 pb-2 outline-0"
        />
        <div className="flex items-center gap-4 justify-end mt-2">
          <p>Remember me</p>
          <input type="checkbox" name="" id="" />
        </div>

        <button className="bg-navy-blue text-[#fff] py-5 text-base rounded-2xl mt-8 font-semibold">
          Sign Up
        </button>
        <button className=" flex justify-center items-center gap-5 text-black border-2 border-navy-blue py-5 text-base font-semibold rounded-2xl mt-6">
          <span>Continue with Google</span> <DPIconGoogleIcon />
        </button>
      </form>
      <p className=" text-base text-center mt-5">
        Already have an account ?
        <span
          onClick={() => navigate('/login')}
          className="text-navy-blue text-base font-semibold cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
