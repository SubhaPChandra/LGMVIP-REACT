import React from 'react';

function Navbar({ onFetchUsers }) {
  return (
    <nav>
      <div className="navbar">
        <h1>Lets Grow More</h1>
        <button onClick={onFetchUsers}>Get Users</button>
      </div>
    </nav>
  );
}

export default Navbar;
