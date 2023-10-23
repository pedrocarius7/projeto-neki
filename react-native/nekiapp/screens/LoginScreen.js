import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [gravarSenha, setGravarSenha] = useState(false);

  const handleLogin = () => {
    // Construa o objeto de dados para enviar à API
    const data = {
      login: login,
      senha: senha,
    };

    // Faça uma solicitação à sua API para autenticação
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.authenticated) {
          // Redirecione para a tela Home se a autenticação for bem-sucedida
          navigation.navigate('Home');
        } else {
          alert('Login ou senha incorretos');
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
      });
  };

  return (
    <View>
      <Text>Login:</Text>
      <TextInput
        placeholder="Digite seu login"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <Text>Senha:</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <CheckBox
        value={gravarSenha}
        onValueChange={() => setGravarSenha(!gravarSenha)}
      />
      <Text>Gravar Senha</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
