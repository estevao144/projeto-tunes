import React from 'react';
import Proptypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends React.Component {
  state = {
    favoritas: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      favoritas: await getFavoriteSongs(),
    });
  }

  musicaFavorita = () => {
    this.setState({ loading: true }, async () => {
      await addSong({ ...this.props });
      const { favoritas } = this.state;
      this.setState({
        favoritas: [...favoritas, this.props],
        loading: false,
      });
    });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { favoritas, loading } = this.state;
    const favoritasMusicas = favoritas.some((musica) => trackId === musica.trackId);

    if (loading) {
      return <Loading />;
    }

    return (
      <div>
        <span>{trackName}</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <label htmlFor="check">
          Favorita
          <input
            id="check"
            type="checkBox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.musicaFavorita }
            checked={ favoritasMusicas }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: Proptypes.string,
  previewUrl: Proptypes.string,
  trackId: Proptypes.number,
}.isRequired;

export default MusicCard;
