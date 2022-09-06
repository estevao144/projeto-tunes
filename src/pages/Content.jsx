import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Content;
