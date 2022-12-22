import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/login.css';

class Login extends React.Component {
  state = {
    loading: false,
    login: false,
    nome: '',
  };

  handleChange = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleClick = () => {
    this.setState({ login: true });
    const { nome } = this.state;
    this.setState({ loading: true }, async () => {
      await createUser({ name: nome });
      this.setState({ loading: false });
    });
  };

  render() {
    const minName = 3;
    const { nome, login, loading } = this.state;
    if (loading) return <Loading />;
    if (!loading && login) return <Redirect to="/search" />;
    return (
      <div
        data-testid="page-login"
        className="page-login"
      >
        <h1>[]Tunes</h1>
        <div className="div-redonda">
          <form className="form">
            <span className="name-login"> Nome:</span>
            <input
              data-testid="login-name-input"
              type="text"
              className="input-name"
              placeholder=""
              onChange={ this.handleChange }
            />

            <button
              data-testid="login-submit-button"
              disabled={ nome.length < minName }
              onClick={ this.handleClick }
              className="button-login"
              type="submit"
              id="submit-btn"
            >
              Entrar
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
