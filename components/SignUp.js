import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Input, Button, Image } from 'react-native-elements';


const SignUp = ({ onNameChange, onLastNameChange, onEmailChange, onPassChange, onPass2Change }) => 
  <View style={styles.container}>
    <Image 
      source={ require('../assets/images/logo.png')}
    />
    <Input 
      placeholder='Nome'
    />
    <Input
      placeholder='Sobrenome'
    />
    <Input
      placeholder='Email'
    />
    <Input
      placeholder='Senha'
      secureTextEntry={true}
    />
    <Input 
      placeholder='Confirmação de Senha'
      secureTextEntry={true}
    />
    <Button title='Inscrever-me' />
  </View>


export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
  },

  loginButton: {
    width: 300,
    height: 50,
    borderRadius: 10,

  },
  iconStyle: {
    marginRight: 10,
  }
});