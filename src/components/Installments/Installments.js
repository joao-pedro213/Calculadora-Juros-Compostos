import React from 'react';
import Installment from './Installment';
import css from './installment.module.css';

export default function Installments(props) {
  //prettier-ignore
  const { numberOfInstallments, initialCapitalValue, compoundInterestValue } = props;
  let totalInstallments = [];
  for (let i = 0; i < numberOfInstallments; i++) {
    totalInstallments.push(i + 1);
  }

  return (
    <div>
      <ul className={css.flexRow}>
        {totalInstallments.map((_, index) => {
          return (
            <Installment
              key={index + 1}
              reference={index + 1}
              initialCapitalValue={initialCapitalValue}
              compoundInterestValue={compoundInterestValue}
            />
          );
        })}
      </ul>
    </div>
  );
}
