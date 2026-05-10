import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">{locale === 'id' ? 'Beranda' : 'Home'}</Link></li>
        <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archive'}</Link></li>
      </ul>
      <button className="toggle-locale" onClick={toggleLocale}>
        {locale === 'id' ? 'en' : 'id'}
      </button>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <button className="button-logout" onClick={logout}>
        {name} <span>&gt;&gt;</span>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
