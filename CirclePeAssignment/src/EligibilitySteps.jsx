import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Eligibility check',
    subSteps: ['Basic Details', 'Work Details'],
    icons: ['🧑‍💼', '💼'],
  },
  {
    title: 'Setup AutoPay',
    subSteps: ['Bank Details', 'Identity Verification'],
    icons: ['🏦', '🪪'],
  },
  {
    title: 'Move-In',
    subSteps: [],
    icons: [],
  },
];

const EligibilitySteps = () => {
  return (
    <>
    <div className="max-w-md mx-auto mt-4 p-6">
    <h1 className="text-center text-2xl font-semibold mb-2">Circle App</h1>
        <p className="bg-blue-50 rounded-lg text-center text-lg text-black-500 font-bold mb-6">
          Rent at <span className="text-blue-500 font-bold">Zero </span> security deposit ✨
        </p>
        <h2 className="text-left text-sm text-gray-500">Set-up No Cost EMI in 3 steps</h2>
      </div>
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
        {/* <div className="space-y-4"> */}
          {steps.map((step, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-500 rounded-full">
                  {index + 1}
                </div>
                <h3 className="ml-3 font-bold bg-blue-50 rounded-2xl px-5 py-2 text-blue-500">{step.title}</h3>
              </div>
              <div className="ml-9 space-y-2">
                {step.subSteps.map((subStep, subIndex) => (
                  <div key={subIndex} className="flex items-center text-gray-700 font-bold">
                    <span className="mr-3 bg-blue-50 p-2 rounded-full">{step.icons[subIndex]}</span>
                    {subStep}
                  </div>
                ))}
              </div>
            </div>
          ))}
        {/* </div> */}

      </div>
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <input
            id="terms"
            type="checkbox"
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            By clicking this, you approved to our{' '}
            <a href="#" className="text-blue-500 underline">
              terms and conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 underline">
              privacy policy
            </a>
          </label>
        </div>
        <Link to="/Rentconversion"> 
        <button className="bg-blue-500 text-white py-3 px-24 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Get Started &gt;
        </button>
        </Link>
        <br />
        <p className="mt-4 text-blue-500 px-4 py-2">
          <Link to="/transaction">
            Go Back
          </Link>
          </p>
      </div>
    </>
  );
};

export default EligibilitySteps;
