import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function Loading() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p>{locale === 'id' ? 'Memuat data...' : 'Loading data...'}</p>
    </div>
  );
}

export default Loading;
