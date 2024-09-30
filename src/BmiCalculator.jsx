import { useState } from 'react';
import imageTotal from './assets/imagetotal.webp';

import image1 from './assets/image1bmi.png';
import image2 from './assets/image2bmi.png';
import image3 from './assets/image3bmi.png';
import image4 from './assets/image4bmi.png';
import image5 from './assets/image4bmi.png';

function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);

  
  const [currentimage, setCurrentimage] = useState('');
  const [alertBMI, setalertBMI] = useState('');
  const [colorAlert, setcolorAlert] = useState('');

  function imageChanger(newBmi) {
    if (newBmi < 18.5) {
      setCurrentimage(image1);
      setalertBMI('Underweight');
      setcolorAlert('blue');
    } else if (newBmi < 24.9 && newBmi >= 18.5) {
      setCurrentimage(image2);
      setalertBMI('Normal weight');
      setcolorAlert('green');
    } else if (newBmi < 29.9 && newBmi >= 24.9) {
      setCurrentimage(image3);
      setalertBMI('Overweight');
      setcolorAlert('yellow');
    } else if (newBmi < 34.9 && newBmi >= 29.9) {
      setCurrentimage(image4);
      setalertBMI('Obese');
      setcolorAlert('pink');
    } else if (newBmi > 35) {
      setCurrentimage(image5);
      setalertBMI('Severely Obese');
      setcolorAlert('red');
    }
  }

  function calculateBMI() {
    let result = weight / (((height / 100) * height) / 100);
    setBmi(result);
    imageChanger(result);
  }

  return (
    <div className="hero min-h-screen bg-gray-100 py-10">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center gap-8">
          <img src={imageTotal} className="max-w-xs rounded-lg shadow-md" alt="BMI Calculator" />
          <h1 className="text-4xl font-bold text-center text-gray-700">Calculate Your BMI</h1>
          <p className="py-6 text-lg text-center text-gray-600">To Calculate Your BMI, please complete the following fields:</p>
          <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
            <input
              type="number"
              placeholder="Height (cm)"
              className="input input-bordered w-full max-w-xs p-2 text-lg border-blue-300 focus:border-blue-500"
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              className="input input-bordered w-full max-w-xs p-2 text-lg border-blue-300 focus:border-blue-500"
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <button onClick={calculateBMI} className="btn btn-primary p-2 text-lg">Calculate BMI</button>
          </div>

          <div className="card max-w-lg bg-white shadow-xl rounded-lg mt-6">
            <figure>
              {currentimage !== '' && weight !== 0 && height !== 0 && (
                <img src={currentimage} alt="BMI category" className="rounded-t-lg" />
              )}
            </figure>
            <div className="card-body">
              {bmi !== null && weight !== 0 && height !== 0 && (
                <p className="text-center mt-4 text-2xl text-gray-800">
                  BMI: {bmi.toFixed(2)}
                </p>
              )}
              {bmi !== null && weight !== 0 && height !== 0 && (
                <p style={{ color: colorAlert }} className="text-center mt-2 text-xl font-semibold">
                  {alertBMI}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BmiCalculator;