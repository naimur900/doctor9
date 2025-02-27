import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  // color?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <main
      className={`container py-8 mx-auto px-6 sm:px-14 lg:px-28 xl:px-36 bg-opacity-5 overflow-hidden`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
