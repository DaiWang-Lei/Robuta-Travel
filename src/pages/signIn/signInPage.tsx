import React from "react";
import { UserLayout } from "@/layouts/userLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  );
};

export default SignInPage;
