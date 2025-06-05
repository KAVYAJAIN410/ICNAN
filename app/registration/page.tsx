// pages/registration.tsx

import React from 'react';

const registrationData = [
  {
    category: 'Students/Scholars',
    earlyBird: '₹ 7000',
    standard: '₹ 10000',
  },
  {
    category: 'Faculty/Research Scientist',
    earlyBird: '₹ 10000',
    standard: '₹ 12000',
  },
  {
    category: 'Industry',
    earlyBird: '₹ 12000',
    standard: '₹ 15000',
  },
  {
    category: 'Foreign Participants',
    earlyBird: '$ 300',
    standard: '$ 450',
  },
  {
    category: 'Group (Students/Scholars) - 5 People',
    earlyBird: '₹ 30000',
    standard: '₹ 40000',
  },
  {
    category: 'Group (Faculty/Research Scientist) - 5 People',
    earlyBird: '₹ 40000',
    standard: '₹ 50000',
  },
];

const RegistrationPage = () => {
  return (
    <div className=" text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#0a2b52]">Registration</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-[#0a2b52] ">
          Join ICNAN'25 and be part of an international platform where groundbreaking ideas in Nanoscience and Nanotechnology are exchanged. Explore the categories below and register early to avail discounted rates.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-white rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#0a2b52] text-white">
                <th className="py-3 px-4 text-lg">Category</th>
                <th className="py-3 px-4 text-lg">Early Bird</th>
                <th className="py-3 px-4 text-lg">Standard</th>
              </tr>
            </thead>
            <tbody className="bg-[#102a4d]/80 divide-y divide-gray-700">
              {registrationData.map((row, index) => (
                <tr key={index} className="hover:bg-[#1e3b6a]/80 transition">
                  <td className="py-3 px-4">{row.category}</td>
                  <td className="py-3 px-4">{row.earlyBird}</td>
                  <td className="py-3 px-4">{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#0a2b52] text-white px-6 py-3 rounded font-semibold transition">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
