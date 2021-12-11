import React from "react";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import Head from "next/head";
function Signup() {
  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Disilab - Social Questions and Answers HTML Template</title>
      </Head>
      <SignUpForm />;
    </div>
  );
}

export default Signup;
