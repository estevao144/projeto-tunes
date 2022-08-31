import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

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
      <div data-testid="page-login">
        <form>
          <label className="" htmlFor="name" value="">
            Nome:
            <input
              data-testid="login-name-input"
              name="name"
              type="text"
              id="input-name"
              placeholder=""
              onChange={ this.handleChange }
            />
          </label>
          <div>
            <button
              data-testid="login-submit-button"
              disabled={ nome.length < minName }
              onClick={ this.handleClick }
              type="submit"
              id="submit-btn"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
