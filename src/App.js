import React from 'react';
import Content from './pages/Content';
import LinkBar from './pages/LinkBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <LinkBar />
        <Content />
      </div>
    );
  }
}

export default App;
