import React from 'react';
import { useState } from 'react';

const Assessment = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 sm:py-16 mt-16"> {/* Adjusted vertical padding for responsiveness */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <div className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center text-base sm:text-lg text-gray-300 mb-8 text-center sm:text-left bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">
            Rate youe'r skills
          </h2>
          <p className="text-sm pt-14 sm:text-base text-gray-300 mb-6">
            Rate your Python skills
          </p>
          <div>
          <div>
      <h2>Select an Option:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Option 3"
            checked={selectedOption === 'Option 3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>

      <div>
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
