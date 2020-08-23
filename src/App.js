import React from 'react';
import Header from './components/Header/Header';
import NumberInput from './components/NumberInput/NumberInput';

export default function App() {
  const [initialCapital, setInitialCapital] = React.useState(0);
  const [compountInterest, setCompoundInterest] = React.useState(0);
  const [installment, setInstallment] = React.useState(0);

  const handleInitialCapitalInput = (newInitialCapital) => {
    setInitialCapital(newInitialCapital);
  };
  const handleCompundInterestInput = (newCompoundInterest) => {
    setCompoundInterest(newCompoundInterest);
  };
  const handleInstallmentInput = (newInstallment) => {
    setInstallment(newInstallment);
  };

  return (
    <div className="container center">
      <Header />
      <div style={styles.inputRow}>
        <NumberInput
          idReference="initialCapital"
          labelName="Capital inicial:"
          value={initialCapital}
          onInputChange={handleInitialCapitalInput}
        />
        <NumberInput
          idReference="compoundInterest"
          labelName="Juros Compostos:"
          value={compountInterest}
          onInputChange={handleCompundInterestInput}
        />
        <NumberInput
          idReference="Installment"
          labelName="Parcelas:"
          value={installment}
          onInputChange={handleInstallmentInput}
        />
      </div>
    </div>
  );
}

const styles = {
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px',
  },
};
