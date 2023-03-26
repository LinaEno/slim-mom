
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';



const CalculatorCalorieForm = () => {
  const id = useMemo(() => nanoid(), []);

  return (
    <form >
      <div >
        <div >
          <div >
            <label >
              Зріст *
            </label>
            <input />
          </div>
          <div >
            <label >
              Вік *
            </label>
            <input
              id="age"
              type="number"
              min="18"
              max="99"
              pattern="[0-9]{2}"
              title="Age must contain minimum two digits and cannot contain spaces, dashes and letters."
              required
            />
          </div>
          <div >
            <label >
            Теперішня вага*
            </label>
            <input
              id="current"
              type="number"
              min="30"
              max="333"
              pattern="[0-9]{3}"
              title="Weight must contain minimum two digits and cannot contain spaces, dashes and letters."
              required
            />
          </div>
        </div>

        <div>
          <div >
            
            <label >
              Бажана вага *
            </label>
            <input />
          </div>
          <p> Група крові *</p>
          <div >
            <input
              id={id}
              type="radio"
              name="bloodType"
              value="1"
            />
            <label>
              1
            </label>
            <input
             
              id={id}
              type="radio"
              name="bloodType"
              value="2"
            />
            <label  htmlFor={id}>
              2
            </label>
            <input
             
              id={id}
              type="radio"
              name="bloodType"
              value="3"
            />
            <label htmlFor={id}>
              3
            </label>
            <input
             
              id={id}
              type="radio"
              name="bloodType"
              value="4"
            />
            <label htmlFor={id}>
              4
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CalculatorCalorieForm;


 