import React, { useState } from 'react';

type Unit = "metric" | "imperial";

const weight =0;
const height=0;

const BMICalculator = () => {

  const [unit, setUnit] = useState("metric");
  const [weight, setweight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    let calculatedBMI;
    if (unit === "metric") {
        const weightInKg = parseFloat(weight);
        const heightInCM = parseFloat(height);

        calculatedBMI = weightInKg / ((heightInCM / 100) ** 2);
    } else {
        const weightInlbs = parseFloat(weight);
        const heightInInches = parseFloat(height);

        calculatedBMI = (703 * weightInlbs) / (heightInInches ** 2);
    }
    const roundBMI = calculatedBMI.toFixed(2);
    setBMI(roundBMI);

    if (calculatedBMI < 18.5) {
        setCategory("Underweight");
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        setCategory("Normal weight");
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        setCategory("Overweight");
    } else {
        setCategory("Obesity");
    }
}


  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  }

  const handleWeightChange = (event) => {
    const value = event.target.value;
    if(parseFloat(value) < 0){
      setweight("0");
    }
    else{
      setweight(value);
    }
  }

  const handleHeightChange = (event) => {
    const value = event.target.value;
    if(parseFloat(value) < 0){
      setHeight("0");
    }
    else{
      setHeight(value);
    }
  }

  return (
      <div id='bmi-calculator'>

          <label >
            <input type='number' value={weight} onChange={handleWeightChange} id='weight-input' placeholder='Enter Weight' />
          </label>

          <br />

          <label >
            <input type='number' value={height} onChange={handleHeightChange} id='height-input' placeholder='Enter Height'/>
          </label>

          <br />


          <select value={unit} onChange={handleUnitChange} id='unit-selection'>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
          </select>

          <br />


          <button onClick={calculateBMI} id='calculate-btn'>Calculate</button>

          <div id='bmi-result'>
            BMI:{bmi}
          </div>
          
          <div id='category-result'>
            Category:{category}
          </div>

      </div>


  );
};


export default BMICalculator;