import React from 'react';

const Header = ({ listCount }) => {
  return (
    <header>
      <h2>
      У вас є {listCount} завдань
      </h2>
    </header>
  )
}

export default Header;