import Head from "next/head";
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Disilab - Social Questions and Answers HTML Template</title>
      </Head>
      <LoginForm />
    </div>
  );
}

export default Login;
