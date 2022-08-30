import React from 'react';
import { Route } from 'react-router-dom';
import Album from './Album';
import Login from './Login';
import Favorites from './Favorites';
import NotFound from './NotFound';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import Search from './Search';

class Content extends React.Component {
  render() {
    return (
      <switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route path="" component={ NotFound } />
        <Route exact path="/search" component={ Search } />
      </switch>
    );
  }
}

export default Content;
