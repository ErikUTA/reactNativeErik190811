import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const datos = () => {
    inputName !== "" && inputLastName !== "" ? setFullName(`Hola ${inputName} ${inputLastName}`) : setFullName("");
  }


  return (
    <View style={styles.container}>
      <Image source={require('./assets/react.png')}/>
      {
        !!!fullName ?
          <Text style={styles.text}>Ingresar datos</Text>
          :
          <Text style={styles.text}>{fullName}</Text>
      }
      <StatusBar backgroundColor='red' />
      <TextInput 
        style={styles.inputText}
        placeholder='Nombre'
        onChangeText={(e) => setInputName(e)}
      />
      <TextInput 
        style={styles.inputText}
        placeholder='Apellido'
        onChangeText={(e) => setInputLastName(e)}
      />
      <Button 
        title='Enviar'
        onPress={() => {!!inputName && !!!inputLastName ? setFullName("Ingresa apellidos") : !!inputLastName && !!!inputName ? setFullName("Ingresa tu nombre") : !!!inputName && !!!inputName ? setFullName("Ingresar datos") : datos()}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    margin: '2%'
  },
  inputText: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: '80%',
    margin: '2%'
  }
});
