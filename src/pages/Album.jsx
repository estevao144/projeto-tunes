import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    // const { match:{ params: { id } } }= this.props;
    return (
      <div data-testid="page-album">
        <Header />
        {/* Album: {id}  */}
      </div>
    );
  }
}

export default Album;
