import React, { useState } from "react";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  return (
    <>
      <div class="flex justify-center items-center mt-2">
        <div class="bg-white shadow-lg rounded-lg px-4 py-2">
          <h1 class="text-3xl font-bold mb-1  text-center ">
            Raise Your Maintenance Query Ticket
          </h1>

          <hr />
          <label
            for="message"
            class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Address
          </label>
          <textarea
            id="message"
            rows="2"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Address"
          ></textarea>

          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type
          </label>
          <select
            id="Type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>--Select--</option>
            <option>Electrical & Electronics Maintenance</option>
            <option>Plumbing Maintenance</option>
            <option>Computer System Maintenance</option>
            <option>Carpenter Services</option>
            <option>Housekeeping Services (Cleaning Services)</option>
            <option>Gardening Services</option>
          </select>

          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="3"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Manually"
          ></textarea>

          <div className="relative overflow-x-auto mt-4 mb-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-900">
              <thead className="text-xs text-white  bg-gray-900 dark:bg-gray-900 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Today
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tomorrow
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime" />
                    <label htmlFor="time-anytime" className="ml-2">
                      Anytime
                    </label>
                  </td>
                  <td className="px-6 py-2 font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime-2" />
                    <label htmlFor="time-anytime-2" className="ml-2">
                      Anytime
                    </label>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6  font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime" />
                    <label htmlFor="time-anytime" className="ml-2">
                      Now
                    </label>
                  </td>
                  <td className="px-6  font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime-2" />
                    <label htmlFor="time-anytime-2" className="ml-2">
                      10:00am to 12:00am
                    </label>
                  </td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime" />
                    <label htmlFor="time-anytime" className="ml-2">
                      Within 2 to 3 hours
                    </label>
                  </td>
                  <td className="px-6 py-2 font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime-2" />
                    <label htmlFor="time-anytime-2" className="ml-2">
                      12:00pm to 03:00pm
                    </label>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6  font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime" />
                    <label htmlFor="time-anytime" className="ml-2">
                      Within 3 to 6 hours
                    </label>
                  </td>
                  <td className="px-6  font-medium text-gray-900">
                    <input type="radio" name="time" id="time-anytime-2" />
                    <label htmlFor="time-anytime-2" className="ml-2">
                      03:00pm to 06:00 pm
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr />
          <div className="flex flex-col gap-1 mt-3 w-full">
      <label className="text-lg font-semibold">Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="input input-bordered w-full"
      />

      <label className="text-lg font-semibold ">Time:</label>
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="input input-bordered w-full"
      />
    </div>
          <br />
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Any Message
          </label>
          <textarea
            id="message"
            rows="3"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upto 100 words only"
          ></textarea>

          <div class="flex justify-center">
            <button
              type="submit"
              class="text-white mt-3 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
