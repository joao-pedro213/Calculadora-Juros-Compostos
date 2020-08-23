import React from 'react';
import css from './header.module.css';

export default function Header() {
  return (
    <h1 className={css.mainTitle}>
      React | <span>Juros Compostos</span>
    </h1>
  );
}
