import React from 'react';

export default function Installment(props) {
  const { reference, initialCapitalValue, compoundInterestValue } = props;
  return (
    <div style={styles.border}>
      <p>
        <span>Parcelas: </span>
        <strong>{reference}</strong>
      </p>
      <p>
        <span>Capital inicial: </span>
        {initialCapitalValue}
      </p>
      <p>
        <span>Juros Comspostos: </span>
        {compoundInterestValue}
      </p>
    </div>
  );
}

const styles = {
  border: {
    border: 'solid 1px lightgrey',
    borderRadius: '5px',
    padding: '10px',
    margin: '20px',
  },
};
