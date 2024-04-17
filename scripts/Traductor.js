import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Traductor = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handlePress = () => {
    navigation.navigate('Inicio'); // Navega a la pantalla "Traducir"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput style={styles.input} placeholder="Ingrese su nombre de usuario" />
      <Image

        style={styles.image}
      />
      <Button
        title="Inicio"
        color="#841584"
        onPress={handlePress} // Llama a handlePress cuando se presiona el botón
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

export default Traductor;
