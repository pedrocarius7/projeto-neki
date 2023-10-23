import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const CadastroScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisibility] = useState(false);

  const handleCadastro = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
    } else {
      alert('Cadastro realizado com sucesso');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={isPasswordVisible ? 'Esconder Senha' : 'Mostrar Senha'}
        onPress={() => setPasswordVisibility(!isPasswordVisible)}
      />
      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry={!isConfirmPasswordVisible}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button
        title={isConfirmPasswordVisible ? 'Esconder Senha' : 'Mostrar Senha'}
        onPress={() => setConfirmPasswordVisibility(!isConfirmPasswordVisible)}
      />
      <Button title="Salvar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroScreen;
