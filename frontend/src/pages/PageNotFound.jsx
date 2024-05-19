import React from "react";
import { GoBack } from "./../utils/GoBack";

const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <h2 className="text-2xl font-semibold capitalize">Page not found</h2>
      <button className="px-4 py-3 rounded-md bg-green-600 text-white font-semibold" onClick={GoBack()}>
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
