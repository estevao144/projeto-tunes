import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';
import '../styles/header.css';

class Header extends React.Component {
  state = {
    usuario: '',
    loading: false,
  };

  componentDidMount() {
    this.handleChange();
  }

  handleChange = async () => {
    this.setState({ loading: true });
    const usuarios = await getUser();
    this.setState({
      usuario: usuarios,
      loading: false,
    });
  };

  render() {
    const { usuario, loading } = this.state;
    return (
      <header className="header-h" data-testid="header-component">
        <nav className="options-nav">
          <Link to="/search" data-testid="link-to-search">
            <button className="btn-header" type="submit">Pesquisa</button>
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            <button type="submit" className="btn-header">Favoritos</button>
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            <button type="submit" className="btn-header">Perfil</button>
          </Link>
        </nav>
        <div className="loading-h" data-testid="header-user-name">
          {loading ? <Loading /> : `Bem vindo ${usuario.name}`}
        </div>
      </header>
    );
  }
}

export default Header;
