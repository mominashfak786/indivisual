import React from "react";

const ServiceForm = () => {
  return (
    <div className="container mx-auto mt-10">
      
      <form className="max-w-md mx-auto ">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="serviceType"
          >
            Service Type
          </label>
          <div className="relative">
            <select
              id="serviceType"
              name="serviceType"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">---Select---</option>
              <option value="">Electrical & Electronics Maintenance</option>
              <option value="">Plumbing Maintenance</option>
              <option value="">Computer System Maintenance</option>
              <option value="">Plumbing Maintenance</option>
              <option value="">
                Housekeeping Services (Cleaning Services)
              </option>
              <option value="">Gardening Services</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              ></svg>
            </div>
          </div>
        </div>
        <div className="mb-6 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="preferredTimeSlot"
          >
            Preferred Time Slot
          </label>
          <div className="table-responsive">
            <table className="border-collapse border border-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-900 text-white">Today</th>
                  <th className="px-4 py-2 bg-gray-900 text-white">Tomorrow</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="anytimeToday"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="anytimeToday">Anytime</label>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="anytimeTomorrow"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="anytimeTomorrow">Anytime</label>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="nowToday"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="nowToday">Now</label>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="nowTomorrow"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="nowTomorrow">10:00am to 12:00pm</label>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="within2to3Today"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="within2to3Today">Within 2 to 3 hours</label>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="within2to3Tomorrow"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="within2to3Tomorrow">
                      12:00pm to 03:00pm
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="within3to6Today"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="within3to6Today">Within 3 to 6 hours</label>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="radio"
                      id="within3to6Tomorrow"
                      name="preferredTimeSlot"
                      className="mr-2"
                    />
                    <label htmlFor="within3to6Tomorrow">
                      03:00pm to 06:00pm
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="problem"
          >
            Problem
          </label>
          <textarea
            id="problem"
            name="problem"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter Manually"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Any Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="(Up to 100 words only)"
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="3"
            maxLength="100"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
