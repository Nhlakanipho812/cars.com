/** @format */

import Link from 'next/link';
import React, { Component } from 'react';
import styles from '../styles/Nav.module.css';

export class Nav extends Component {
  render() {
    return (
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.li}>
          <Link href='/breeds'>Breeds</Link>
        </li>
        <li className={styles.li}>
          <Link href='/categories'>Categories</Link>
        </li>
        <li className={styles.li}>
          <Link href='/favourites'>Favourites</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
