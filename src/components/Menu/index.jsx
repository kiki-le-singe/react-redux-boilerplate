import React from 'react';
import { Link } from 'react-router';

export default function Menu() {
  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
    </nav>
  );
}
