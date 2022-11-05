import React from "react";

const ErrorPage = () => {
  return (
    <div
      className={`flex justify-center flex-col md:flex-row items-center h-[calc(100vh_-_4rem)] text-4xl font-bold text-white bg-gradient-to-tr from-primary to-secondary`}
    >
      <div>You hit a</div>
      <div className={`mx-2`}>
        <span className={`flex justify-center items-center text-7xl`}>
          4
          <img src="WheelWhite.svg" alt="Wheel" />
          4
        </span>
      </div>
      <div>Page</div>
    </div>
  );
};

export default ErrorPage;
