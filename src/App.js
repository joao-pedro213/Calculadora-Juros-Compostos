import React from 'react';
import Header from './components/Header/Header';

export default function App() {
  const [initialCapital, setInitialCapital] = React.useState(0);
  const [compountInterest, setCompoundInterest] = React.useState(0);
  const [tranche, setTranche] = React.useState(0);

  return (
    <div className="container center">
      <Header />
    </div>
  );
}
