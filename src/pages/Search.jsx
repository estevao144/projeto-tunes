import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    artista: '',
  };

  handleChange = (event) => {
    this.setState({ artista: event.target.value });
  };

  render() {
    const minName = 2;
    const { artista } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
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
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
