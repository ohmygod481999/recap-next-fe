import LoginForm from "../../components/LoginForm/LoginForm";
import Head from "next/head";
import React from "react";
import SignupForm from "../../components/signUpForm/SignUpForm";

function Signup() {
  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Recap - Caption recommendation community</title>
      </Head>
      <SignupForm />
    </div>
  );
}

export default Signup;
