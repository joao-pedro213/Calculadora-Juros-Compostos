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
        className={css.inputText}
        style={{
          borderBottom: '1px solid #bdc3c7',
          boxShadow: '0 1px 0 0 #bdc3c7',
        }}
        id={idReference}
        type="number"
        value={value}
        onChange={handleInputChange}
        min={idReference !== 'compoundInterest' ? 0 : null}
      />
      <label
        style={{ color: '#ecf0f1' }}
        className="active"
        htmlFor={idReference}
      >
        {labelName}
      </label>
    </div>
  );
}
