import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      skills: [], 
      isModalAberta: false,
      opcoesCombo: [],
    };
  }

  adicionarSkill = () => {
    const novaSkill = {
      url: '', // URL da imagem
      nome: '', // Nome da Skill
      level: '', // Nível ou versão da Skill
      descricao: '', // Descrição da Skill
    };
  
    // Adicione a nova Skill à lista
    this.setState((prevState) => ({
      skills: [...prevState.skills, novaSkill],
    }));
  };

  editarLevel = (index, novoLevel) => {
    this.setState((prevState) => {
      const novasSkills = [...prevState.skills];
      novasSkills[index].level = novoLevel;
      return { skills: novasSkills };
    });
  };
  
  excluirSkill = (index) => {
    this.setState((prevState) => {
      const novasSkills = [...prevState.skills];
      novasSkills.splice(index, 1);
      return { skills: novasSkills };
    });
  };

  buscarDadosDaAPI = () => {
    // Busque as opções da combo de um endpoint
    fetch('hhttps://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isModalAberta: true, opcoesCombo: data });
      })
      .catch((error) => {
        console.error('Erro ao buscar as opções da combo:', error);
      });
  };

  abrirModal = () => {
    this.buscarDadosDaAPI(); // Chame o método para buscar os dados da API
    this.setState({ isModalAberta: true });
  };

  fecharModal = () => {
    this.setState({ isModalAberta: false });
  };

  render() {
    return (
      <div>
        <h2>Minhas Skills</h2>
        <button onClick={this.adicionarSkill}>Adicionar Skill</button>

        

         {/* Renderize a modal */}
            <Modal
                isOpen={this.state.isModalAberta}
                onRequestClose={this.fecharModal}
            >
            <h2>Adicionar Skill</h2>
            <select>

                <select>
                    <option value="">Selecione uma Skill</option>
                    {this.state.opcoesCombo.map((opcao) => (
                    <option key={opcao.id} value={opcao.id}>
                    {opcao.title}
            </option>
             ))}
                 </select>

            </select>
            <button>Salvar</button>
            <button onClick={this.fecharModal}>Cancelar</button>
            </Modal>
  
         <ul>
          {this.state.skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.url} alt="Imagem da Skill" />
              <div>

                <div>
                  <strong>Nome:</strong> {skill.nome}
                </div>

                <div>
                  <strong>Level:</strong>
                  <input
                    type="text"
                    value={skill.level}
                    onChange={(e) => this.editarLevel(index, e.target.value)}
                  />
                </div>

                <div>
                  <strong>Descrição:</strong> {skill.descricao}
                </div>

              </div>

              <button onClick={() => this.excluirSkill(index)}>Excluir</button>

            </li>
          ))}

        </ul> 

       <button> <Link to="/">Logout</Link></button>
        
      </div>
    );
  }
  
}

export default Home;