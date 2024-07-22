import React from "react";

interface IPrimaryNavBar {
  children?: React.ReactNode;
}

export const PrimaryNavBar: React.FC<IPrimaryNavBar> = ({ children }) => {
  return (
    <nav className="w-screen h-16 col-auto flex gap-16 px-4 drop-shadow-app-ds-yellow bg-appDarkBlue">
      {children}
    </nav>
  );
};
