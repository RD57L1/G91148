import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert("Olá, mundo!", "Bem-vindo ao aplicativo!", [
      {
        text: "OK",
        onPress: () => console.log('Botão OK pressionado')
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao aplicativo!</Text>
      <Button title="Clique aqui" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});