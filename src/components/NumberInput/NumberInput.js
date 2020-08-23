import React from 'react';
import css from './numberInput.module.css';

export default function NumberInput(props) {
  const { idReference, labelName, value, onInputChange } = props;

  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  const inputClasses = `${css.numberInput} input-field`;

  return (
    <div className={inputClasses}>
      <input
        id={idReference}
        type="number"
        value={value}
        onChange={handleInputChange}
        min={idReference !== 'compoundInterest' ? 0 : null}
      />
      <label className="active" htmlFor={idReference}>
        {labelName}
      </label>
    </div>
  );
}
