import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';

class Album extends React.Component {
  state = {
    listaMusicas: [],
    loading: true,
  };

  componentDidMount() {
    this.musicaAPI();
  }

  musicaAPI = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const musica = await getMusics(id);
    this.setState({
      listaMusicas: musica,
      loading: false,
    });
  };

  render() {
    const { listaMusicas, loading } = this.state;
    const musicas = listaMusicas.filter((musica) => musica.kind === 'song');

    return (
      <div data-testid="page-album">
        <Header />
        <h3>Pesquisar</h3>
        { loading ? (<Loading />) : (
          <section>
            <div>
              <img
                src={ listaMusicas[0].artworkUrl100 }
                alt={ listaMusicas[0].collectionName }
                id={ listaMusicas[0].collectionName }
              />
              <p data-testid="album-name">{ listaMusicas[0].collectionName }</p>
              <p data-testid="artist-name">{ listaMusicas[0].artistName }</p>
            </div>
            <div>
              { musicas.map((element) => {
                const { trackId, trackName, previewUrl } = element;
                return (
                  <MusicCard
                    key={ trackId }
                    trackId={ trackId }
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                  />
                );
              })}
            </div>
          </section>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
export default Album;
