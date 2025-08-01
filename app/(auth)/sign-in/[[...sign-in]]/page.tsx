import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="bg-[#161925] flex min-h-screen w-full justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
