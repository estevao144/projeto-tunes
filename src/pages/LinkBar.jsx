import React from 'react';
import { Link } from 'react-router-dom';

class LinkBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/search">search</Link>
          <Link to="/album/:id">Album</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/NotFound">Not Found</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Profile/edit">Profile edit</Link>
        </nav>
      </div>
    );
  }
}

export default LinkBar;
