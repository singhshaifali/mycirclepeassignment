import React, { useState } from 'react';

const SlideUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Button to trigger the slide-up */}
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white px-4 py-2 rounded absolute top-4 right-4"
      >
        Toggle Page
      </button>

      {/* Sliding section */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isVisible ? 'h-64' : 'h-0'
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Slide-Up Page</h2>
          <p>This is the content of the slide-up page.</p>
          <button
            onClick={handleToggle}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideUpPage;