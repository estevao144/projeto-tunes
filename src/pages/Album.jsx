import React from 'react';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';

class Album extends React.Component {
  state = {
    listMusic: [],
    loading: false,
  };

  componentDidMount() {
    this.music();
  }

  music = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const single = await getMusics(id);
    this.setState({
      listMusic: single,
    });
  };

  render() {
    loading = false ? <Loading /> : (
      return (<div data-testid="page-album">
      <Header />
      <div>
        <img
          src={listMusic[0].artworkUrl100}
          alt={listMusic[0].collectionName}
          id={listMusic[0].collectionName}
        />
      </div>
      <div>
      { musicas.map((musica) => {
                const { trackId, trackName, previewUrl } = musica;
        <MusicCard
          key={trackId}
          trackId={trackId}
          trackName={trackName}
          previewUrl={previewUrl}
        />}
      </div>
    </div>
    ));
  }
}

Album.propTypes = {
  previewUrl: PropTypes.string,

};

export default Album;
