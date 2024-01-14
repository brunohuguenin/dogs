import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import SVGDogs from '../Assets/SVGDogs';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <SVGDogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
