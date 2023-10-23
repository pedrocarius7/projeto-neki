import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.module.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      senha: '',
      lembrarSenha: false, 
      erro: null,
      mostrarSenhas: false,
    };
  }

  handleLoginChange = (e) => {
    this.setState({ login: e.target.value });
  };

  handleSenhaChange = (e) => {
    this.setState({ senha: e.target.value });
  };

  handleLembrarSenhaChange = (e) => {
    const lembrarSenha = e.target.checked;
    this.setState({ lembrarSenha });
    localStorage.setItem('lembrarSenha', lembrarSenha);
  };

  handleMostrarSenhas = () => {
    this.setState((prevState) => ({
      mostrarSenhas: !prevState.mostrarSenhas,
    }));
  };

  checkLembrarSenhaFromLocalStorage() {
    const lembrarSenha = localStorage.getItem('lembrarSenha');
    if (lembrarSenha) {
      this.setState({ lembrarSenha: JSON.parse(lembrarSenha) });
    }
  }

  componentDidMount() {
    this.checkLembrarSenhaFromLocalStorage();
  }

  handleSubmit = (e) => {

    if (this.state.lembrarSenha) {
      localStorage.setItem('senha', this.state.senha);

    } else {
      localStorage.removeItem('senha');
    }

    e.preventDefault();
    console.log('Login:', this.state.login);
    console.log('Senha:', this.state.senha);
  };

  render() {
    return (
      <div>

        <h2>Login</h2>

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="login">Usuário:</label>
            <input
              type="text"
              id="login"
              value={this.state.login}
              onChange={this.handleLoginChange}
            />
          </div>

          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type={this.state.mostrarSenhas ? 'text' : 'password'}
              id="senha"
              value={this.state.senha}
              onChange={this.handleSenhaChange}
            />
          </div>

          <div>
            <label>
              Lembrar Senha:
            <input
            type="checkbox"
            checked={this.state.lembrarSenha}
            onChange={this.handleLembrarSenhaChange}
            />
            </label>
          </div>

          <button type="button" onClick={this.handleMostrarSenhas}>
            {this.state.mostrarSenhas ? 'Ocultar Senha' : 'Mostrar Senha'}
          </button>
          <button type="submit">Entrar</button>
          <Link to="/cadastro">Cadastrar-se</Link>

        </form>

      </div>
    );
  }
}

export default Login;
