import React, { Component } from 'react';
import './Cadastro.module.css';

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      usuario: '',
      senha: '',
      confirmarSenha: '',
      mostrarSenhas: false,
      senhaCorrespondente: true,
      cadastroSalvo: false,
      erros: {
        usuario: '',
        senha: '',
        confirmarSenha: '',
      },
    };
  }

  handleUsuarioChange = (e) => {
    this.setState({ usuario: e.target.value });
    this.validateUsuario(e.target.value);
  };

  handleSenhaChange = (e) => {
    this.setState({ senha: e.target.value });
    this.validateSenha(e.target.value);
  };

  handleConfirmarSenhaChange = (e) => {
    this.setState({ confirmarSenha: e.target.value });
    this.validateConfirmarSenha(e.target.value);
  };

  handleMostrarSenhas = () => {
    this.setState((prevState) => ({
      mostrarSenhas: !prevState.mostrarSenhas,
    }));
  };

  handleSalvarCadastro = () => {

    const { usuario, senha, confirmarSenha } = this.state;

  this.validateUsuario(usuario);
  this.validateSenha(senha);
  this.validateConfirmarSenha(confirmarSenha);

  if (!usuario || !senha || !confirmarSenha) {
    this.setState({ cadastroSalvo: false });
  } else if (this.state.erros.usuario || this.state.erros.senha || this.state.erros.confirmarSenha) {
    this.setState({ cadastroSalvo: false });
  } else if (senha === confirmarSenha) {
    this.setState({ cadastroSalvo: true });
  } else {
    this.setState({ cadastroSalvo: false });
  }

  console.log('Usuário:', usuario);
  console.log('Senha:', senha);
};

  validateUsuario = (usuario) => {
    if (!usuario) {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, usuario: 'Campo de usuário obrigatório' },
      }));
    } else {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, usuario: '' },
      }));
    }
  };

  validateSenha = (senha) => {
    if (!senha) {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, senha: 'Campo de senha obrigatório' },
        senhaCorrespondente: false,
      }));
    } else {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, senha: '' },
      }));
    }
  };

  validateConfirmarSenha = (confirmarSenha) => {
    const { senha } = this.state;
    if (!confirmarSenha) {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, confirmarSenha: 'Campo de confirmação de senha obrigatório' },
        senhaCorrespondente: false,
      }));
    } else if (confirmarSenha !== senha) {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, confirmarSenha: 'As senhas não coincidem' },
        senhaCorrespondente: false,
      }));
    } else {
      this.setState((prevState) => ({
        erros: { ...prevState.erros, confirmarSenha: '' },
        senhaCorrespondente: true,
      }));
    }
  };

  render() {
    return (
      <div container1>

        <h2>Cadastro</h2>

        <form>

          <div>
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              id="usuario"
              value={this.state.usuario}
              onChange={this.handleUsuarioChange}
            />
            <span className="erro">{this.state.erros.usuario}</span>
          </div>
          
          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type={this.state.mostrarSenhas ? 'text' : 'password'}
              id="senha"
              value={this.state.senha}
              onChange={this.handleSenhaChange}
            />
            <span className="erro">{this.state.erros.senha}</span>
          </div>

          <div>
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input
              type={this.state.mostrarSenhas ? 'text' : 'password'}
              id="confirmarSenha"
              value={this.state.confirmarSenha}
              onChange={this.handleConfirmarSenhaChange}
            />
            <span className="erro">{this.state.erros.confirmarSenha}</span>
          </div>

          <div className="botaoMostrar">
          <button type="button" onClick={this.handleMostrarSenhas}>
            {this.state.mostrarSenhas ? 'Ocultar Senhas' : 'Mostrar Senhas'}
          </button>
          </div>

          <div className="botaoFinalizar">
          <button type="button" onClick={this.handleSalvarCadastro}>
            Finalizar
          </button>
          </div>

          {this.state.cadastroSalvo && <p>Cadastro salvo com sucesso.</p>}
          
        </form>

      </div>
    );
  }
}

export default Cadastro;
