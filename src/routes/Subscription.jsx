import React from "react";

const Subscription = () => {
  return (
    <>
      <div class="custom-height flex justify-center items-center">
        <div class=" border-2  bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-center mb-4">
            Subscription Details
          </h2>
          <div class="text-center">
            <p class="mb-4">Customer ID: xxxxxx</p>
            <p class="mb-4">Plan Activated: xx/xx/xxxx</p>
            <p class="mb-4">Expires On: xx/xx/xxxx</p>
            <p class="mb-4">Subscription Cost: SGD xxx</p>
          </div>
          <div class="flex justify-center">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
              Renew Now
            </button>
            <button class="bg-blue-200 text-black px-4 py-2 rounded-lg shadow-md ml-4 hover:bg-blue-300">
              Manage Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
