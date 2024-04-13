import React from 'react';
import Navbar from './Navbar';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Maintenance = () => {
  const maintenanceData = [
    { id: 1, serviceName: 'Plumbing', serviceType: 'Repair', fees: getRandomInt(500, 2500) },
    { id: 2, serviceName: 'Electrical', serviceType: 'Installation', fees: getRandomInt(500, 2500) },
    { id: 3, serviceName: 'Milkmen', serviceType: 'Utility', fees: getRandomInt(500, 2500) },
    { id: 4, serviceName: 'Cleaning', serviceType: 'Deep Cleaning', fees: getRandomInt(500, 2500) },
    { id: 5, serviceName: 'Painting', serviceType: 'Interior', fees: getRandomInt(500, 2500) },
  ];

  const totalFees = maintenanceData.reduce((total, item) => total + parseInt(item.fees), 0);

  return (
    <>
      <Navbar />
      <div className="bg-white p-4">
        <h2 className="text-2xl font-bold mb-4">Maintenance</h2>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-500">ID</th>
              <th className="px-4 py-2 border border-gray-500">Service Name</th>
              <th className="px-4 py-2 border border-gray-500">Service Type</th>
              <th className="px-4 py-2 border border-gray-500">Fees</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceData.map((item) => (
              <tr key={item.id} className="border border-gray-500">
                <td className="px-4 py-2 border border-gray-500">{item.id}</td>
                <td className="px-4 py-2 border border-gray-500">{item.serviceName}</td>
                <td className="px-4 py-2 border border-gray-500">{item.serviceType}</td>
                <td className="px-4 py-2 border border-gray-500">{item.fees}</td>
              </tr>
            ))}
            <tr className="border border-gray-500">
              <td colSpan="3" className="text-right px-4 py-2 border border-gray-500">
                Total Fees:
              </td>
              <td className="px-4 py-2 border border-gray-500">{`${totalFees}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Maintenance;
