import React from 'react';

import Burger from 'components/buttons/Burger';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <Burger />
        <h2 className="title"><a href="https://github.com/kiki-le-singe/react-redux-boilerplate" target="_blank">React Redux Boilerplate</a></h2>
      </div>
    </div>
  );
}
