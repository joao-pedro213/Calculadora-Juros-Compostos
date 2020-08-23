import React from 'react';
import css from './header.module.css';

export default function Header() {
  return (
    <div className={css.flexRow}>
      <img className={css.reactLogo} src="./logo192.png" alt="React" />
      <h1 className={css.mainTitle}>Juros Compostos</h1>
    </div>
  );
}
