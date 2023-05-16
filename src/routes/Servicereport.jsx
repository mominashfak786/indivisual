import React from 'react'

const Servicereport = () => {
  return (
      <>
      <div className="overflow-x-auto">
      <table className="table table-auto mx-auto mt-6 ">
        <thead>
          <tr>
            <th className="border-2  border-black px-4 py-2">Type of Services</th>
            <th className="border-2  border-black px-4 py-2">Allotted In Plan</th>
            <th className="border-2  border-black px-4 py-2">Used</th>
            <th className="border-2  border-black px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 text-center   border-black px-4 py-2">Electrical &amp; Electronics Maintenance</td>
            <td className="border-2 text-center  border-black px-4 py-2 bg-blue-600">18</td>
            <td className="border-2   text-center border-black px-4 py-2 bg-red-600">6</td>
            <td className="border-2  text-center  border-black px-4 py-2 bg-green-400">12</td>
          </tr>
          <tr>
            <td className="border-2 text-center  border-black px-4 py-2">Plumbing Maintenance</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">10</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">2</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">10</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Computer System Maintenance (Hardware &amp; Software)</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">8</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">3</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">5</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Carpenter Services</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">6</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">2</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">4</td>
          </tr>
          <tr>
            <td className="border-2  text-center border-black px-4 py-2">Cleaning Solutions</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">4</td>
            <td className="border-2 text-center  border-black px-4 py-2 bg-red-600">2</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">2</td>
          </tr>
          <tr>
            <td className="border-2 text-center  border-black px-4 py-2">F.M.O Review</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-blue-600">2</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-red-600">-</td>
            <td className="border-2  text-center border-black px-4 py-2 bg-green-400">2</td>
          </tr>
        </tbody>
      </table>
    </div>
      </>
  )
}

export default Servicereport