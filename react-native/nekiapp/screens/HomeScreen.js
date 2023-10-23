import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const HomeScreen = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React Native', level: 3, description: 'Framework para desenvolvimento mobile' },
    { id: 2, name: 'Node.js', level: 4, description: 'Ambiente de execução JavaScript' },
  ]);

  const [isEditModalVisible, setEditModalVisibility] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});
  const [newLevel, setNewLevel] = useState('');

  const handleEditSkill = () => {
    const updatedSkills = skills.map(skill => {
      if (skill.id === selectedSkill.id) {
        return { ...skill, level: newLevel };
      }
      return skill;
    });
    setSkills(updatedSkills);
    setEditModalVisibility(false);
  };

  const handleDeleteSkill = (id) => {
    const updatedSkills = skills.filter(skill => skill.id !== id);
    setSkills(updatedSkills);
  };

  return (
    <View>
      <Text>Lista de Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Nível: {item.level}</Text>
            <Text>Descrição: {item.description}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedSkill(item);
                setNewLevel(item.level.toString());
                setEditModalVisibility(true);
              }}
            >
              <Text>Editar Nível</Text>
            </TouchableOpacity>
            <Button title="Excluir Skill" onPress={() => handleDeleteSkill(item.id)} />
          </View>
        )}
      />
      <Modal visible={isEditModalVisible}>
        <View>
          <Text>Editar Nível da Skill</Text>
          <Text>{selectedSkill.name}</Text>
          <TextInput
            placeholder="Novo Nível"
            value={newLevel}
            onChangeText={setNewLevel}
          />
          <Button title="Salvar" onPress={handleEditSkill} />
          <Button title="Cancelar" onPress={() => setEditModalVisibility(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
