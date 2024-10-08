import React from "react";
import { Logo } from "./_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col justify-center items-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
