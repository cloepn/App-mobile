import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    // Ajoutez ici le code pour initialiser le jeu ou naviguer vers l'écran du jeu
    navigation.navigate('FunnyGame'); // Redirection vers la page du jeu
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('./img/logo.png')} // Remplacez le chemin par le chemin réel de votre logo
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenue sur Clicoé</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <Text style={styles.buttonText}>Commencer le défi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Rose clair
  },
  logo: {
    width: 100, // Ajustez la largeur selon votre besoin
    height: 100, // Ajustez la hauteur selon votre besoin
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493', // Rose foncé
    textAlign: 'center', // Centre le texte
  },
  button: {
    backgroundColor: '#FF69B4', // Rose moyen
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centre le texte
  },
  linkButton: {
    backgroundColor: '#FFB6C1', // Rose clair
    padding: 15,
    borderRadius: 10,
  },
  linkButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centre le texte
  },
});

export default HomeScreen;