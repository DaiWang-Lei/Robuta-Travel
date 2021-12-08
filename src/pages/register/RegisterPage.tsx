import React, { FC } from "react";
import { RegisterForm } from "./RegisterForm";
// import { UserLayout } from "@/layouts/userLayout";
import { UserLayout } from "../../layouts/userLayout";


export const RegisterPage: FC = () => {
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>
  );
};

export default RegisterPage;
