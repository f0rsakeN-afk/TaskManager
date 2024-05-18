import React from "react";

const Spinner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-purple-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="h-28 w-28 rounded-full"
      />
    </div>
  );
};

export default Spinner;
