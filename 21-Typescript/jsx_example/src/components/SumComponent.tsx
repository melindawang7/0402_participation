import { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [sum, setSum] = useState<number>(0);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const inputStyle = {
    backgroundColor: 'white',
    color: '#1f2937',
    padding: '0.5rem 1rem',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    width: '100%',
    fontSize: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    width: '100%',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center mt-8 w-80">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Sum Calculator</h2>
      
      <div className="space-y-4 mb-6">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          placeholder="0"
          style={inputStyle}
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          placeholder="0"
          style={inputStyle}
        />
      </div>

      <button 
        onClick={calculateSum}
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
      >
        Calculate Sum
      </button>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mt-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Result:</p>
        <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#16a34a' }}>{sum}</p>
      </div>
    </div>
  );
}

export default SumComponent;
