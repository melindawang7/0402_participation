import { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <br></br>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
