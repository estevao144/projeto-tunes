import React from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardAlbum from './CardAlbum';

class Search extends React.Component {
  state = {
    artista: '',
    albums: [],
    loading: false,
    bandaArtista: '',
  };

  handleChange = ({ target }) => {
    this.setState({ artista: target.value });
  };

  handleClick = () => {
    const { artista } = this.state;
    this.setState({ loading: true }, async () => {
      const api = await searchAlbumsAPI(artista);
      this.setState({
        bandaArtista: artista,
        artista: '',
        albums: api,
        loading: false,
      });
    });
  };

  render() {
    const minName = 2;
    const { artista, loading, albums, bandaArtista } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <form>
            <label className="" htmlFor="artist" value="">
              <input
                data-testid="search-artist-input"
                name="artist"
                type="text"
                id="input-artist"
                placeholder="Nome do artista"
                onChange={ this.handleChange }
              />
            </label>
            <div>
              <button
                data-testid="search-artist-button"
                disabled={ artista.length < minName }
                type="submit"
                id="submit-btn"
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>
            </div>
          </form>
        )}
        <section>
          { !albums.length ? 'Nenhum álbum foi encontrado' : (
            <span>
              {`Resultado de álbuns de: ${bandaArtista}`}
            </span>
          )}
          ;

          { albums.map(
            (element) => (
              <div key={ element.collectionId }>
                <CardAlbum { ...element } />
              </div>
            ),
          )}
          ;
        </section>
      </div>
    );
  }
}

export default Search;
