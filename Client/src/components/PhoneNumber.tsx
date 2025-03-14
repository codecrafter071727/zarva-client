import { useState, useEffect } from 'react';

const PhoneNumberForm = () => {
  const [toNumber, setToNumber] = useState('');
  const [toNumber1, setToNumber1] = useState('');

  // Load saved numbers from localStorage on component mount
  useEffect(() => {
    const savedPhone = localStorage.getItem('phone');
    const savedPhone1 = localStorage.getItem('phone1');
    
    if (savedPhone) setToNumber(savedPhone);
    if (savedPhone1) setToNumber1(savedPhone1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save both numbers to localStorage
    localStorage.setItem('phone', toNumber);
    localStorage.setItem('phone1', toNumber1);
    
    alert('Phone numbers saved successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-t from-gray-700 to-black rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">Phone Numbers</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="phone1" 
            className="block text-sm font-medium text-white mb-1"
          >
            Primary Phone Number
          </label>
          <input
            id="phone1"
            type="tel"
            placeholder="+91**********"
            value={toNumber}
            onChange={(e) => setToNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d5c58a] focus:border-[#d5c58a]"
            pattern="^\+?[1-9]\d{1,14}$"
            required
          />
        </div>

        <div>
          <label 
            htmlFor="phone2" 
            className="block text-sm font-medium text-white mb-1"
          >
            Secondary Phone Number
          </label>
          <input
            id="phone2"
            type="tel"
            placeholder="+91**********"
            value={toNumber1}
            onChange={(e) => setToNumber1(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d5c58a] focus:border-[#d5c58a]"
            pattern="^\+?[1-9]\d{1,14}$"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#d5c58a] text-white py-2 px-4 rounded-md hover:bg-[#6f6540] focus:outline-none focus:ring-2 focus:ring-[#d5c58a] focus:ring-offset-2 transition-colors duration-200"
        >
          Save Numbers
        </button>
      </form>
    </div>
  );
};

export default PhoneNumberForm;