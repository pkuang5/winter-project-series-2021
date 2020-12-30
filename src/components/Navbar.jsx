import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {

    const navStyle = {
        color: 'white'
    }

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
          <Link style={navStyle} to='/recipe'>
            <li>Recipe</li>
          </Link>
      </ul>
    </nav>
  );
}

export default Navbar;