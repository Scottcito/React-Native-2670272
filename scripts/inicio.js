import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import logo from '../Imagenes/logo.jpeg'

const Inicio = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación


  const handleDiccionarioPress = () => {
    navigation.navigate('Diccionario');
  };

  const handleTraductorPress = () => {
    navigation.navigate('Traductor');
  };

  return (
    <View style={styles.container}>
      <Text>SenAssist</Text>
      <Image
        source={logo}
        style={styles.image}
      />
      <Button
        title="Diccionario de palabras"
        color="#841584"
        onPress={handleDiccionarioPress} // Llama a handlePress cuando se presiona el botón
      />
       <Button
        title="Traductor SenAssist"
        color="#841584"
        onPress={handleTraductorPress} // Llama a handlePress cuando se presiona el botón
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 50,
  },
  input: {
    height: 200,
    paddingTop: 10,
    width: 200,
    borderColor: 'gray',
    borderWidth: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});

export default Inicio;
