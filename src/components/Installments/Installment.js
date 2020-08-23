import React from 'react';

export default function Installment(props) {
  const { reference, initialCapitalValue, compoundInterestValue } = props;
  // prettier-ignore
  const calculateCompoundInterest = (initialCapital, installment, compoundInterest) => {
    let amount = initialCapital * Math.pow(1 + compoundInterest/100, installment);
    amount = (amount -initialCapital);
    return amount;
  };

  const calculatePercentageFrom = (total, value) => {
    const percentage = (value * 100) / total;
    return percentage;
  };

  // prettier-ignore
  const amount = calculateCompoundInterest(initialCapitalValue, reference, compoundInterestValue);
  const isNegative = Math.sign(amount) === -1 ? true : false;

  return (
    <div style={styles.border}>
      <p>
        <span>Parcela: </span>
        <strong>{reference}</strong>
      </p>
      <p>
        <span>Total: </span>
        {(parseInt(initialCapitalValue) + amount).toFixed(2)}
      </p>
      <p>
        <span>{!isNegative ? 'Rendimento: ' : 'Depreciação: '}</span>

        {!isNegative
          ? `R$ ${amount.toFixed(2)}`
          : `-R$ ${Math.abs(amount).toFixed(2)}`}
      </p>
      <p>
        {`${calculatePercentageFrom(initialCapitalValue, amount).toFixed(2)}%`}
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
