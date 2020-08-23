import React from 'react';
import css from './installment.module.css';

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
  const borderClass = !isNegative ? css.incomeBorder : css.depreciationBorder;

  return (
    <div className={[css.flexColumn, borderClass].join(' ')}>
      <p className={css.defaultText}>
        <span className={css.defaultSpan}>Parcela: </span>
        <strong>{reference}</strong>
      </p>

      <p className={css.defaultText}>
        <span className={!isNegative ? css.income : css.depreciation}>
          Total:{' '}
        </span>
        {(parseInt(initialCapitalValue) + amount).toFixed(2)}
      </p>

      <p className={css.defaultText}>
        <span className={!isNegative ? css.income : css.depreciation}>
          {!isNegative ? 'Rendimento: ' : 'Depreciação: '}
        </span>
        {!isNegative
          ? `R$ ${amount.toFixed(2)}`
          : `-R$ ${Math.abs(amount).toFixed(2)}`}
      </p>

      <p
        className={
          !isNegative ? css.incomePercentage : css.depreciationPercentage
        }
      >
        {`${calculatePercentageFrom(initialCapitalValue, amount).toFixed(2)}%`}
      </p>
    </div>
  );
}
