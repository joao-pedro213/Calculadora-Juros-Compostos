import React from 'react';
import Installment from './Installment';

export default function Installments(props) {
  //prettier-ignore
  const { numberOfInstallments, initialCapitalValue, compoundInterestValue } = props;
  let totalInstallments = [];
  for (let i = 0; i < numberOfInstallments; i++) {
    totalInstallments.push(i + 1);
  }

  return (
    <div className="container">
      <ul style={styles.installmentList}>
        {totalInstallments.map((installment, index) => {
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

const styles = {
  installmentList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px',
  },
};
