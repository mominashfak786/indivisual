import React from "react";
import "../styles/dashboard.css"
const Refrral = () => {
  return (
    <>
     <div class="custom-height flex justify-center items-center">
        <div class="w-90 border-2 border-black p-6 h-80 flex flex-col justify-center items-center">
          <h2 class="text-2xl font-bold mb-4">Billing Details</h2>
          <div class="bg-gray-100 p-4 rounded-lg mb-4 mt-3 ">
            <div className="flex">
              <p>Subscription Cost : </p>
              <p> SGD$</p>
            </div>
            <div className="flex">
              <p>Expires On : </p>
              <p> xx/xx/xxxx</p>
            </div>
          </div>
          <a href="#!" class="text-blue-500 hover:underline">
            Download Invoice Pdf
          </a>
        </div>
      </div>...i wanna increse the size of box

    </>
  );
};

export default Refrral;
