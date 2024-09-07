import React from 'react';
import { FiHome, FiSearch, FiHeart, FiUser } from 'react-icons/fi'; // Example using React Icons
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <FiHome className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <FiSearch className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <FiHeart className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <FiUser className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
