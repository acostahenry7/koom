import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="bg-[#161925] flex min-h-screen w-full justify-center items-center">
      <SignIn
        appearance={{
          variables: {
            colorBackground: "#1c1f2e",
            colorInput: "#252A41",
            colorPrimary: "#0e78f9",
            colorInputForeground: "white",
            colorForeground: "white",
          },
        }}
      />
    </main>
  );
};

export default SignInPage;
