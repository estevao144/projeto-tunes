import React from 'react';
import Header from './Header';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <Header />
        <span>
          { trackName }
          {' '}
        </span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}
MusicCard.propTypes = {
  trackName: Proptypes.string,
  previewUrl: Proptypes.string,
}.isRequired;

export default MusicCard;
