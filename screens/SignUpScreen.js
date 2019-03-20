import React from 'react';
import { Animated, Keyboard, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Image, Input, Button } from 'react-native-elements';


class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Inscrever-se',
  };
  render() {
    return(
      <KeyboardAvoidingView 
        style={styles.container}
        
      >
        <Image 
          source={ require('../assets/images/logo.png')}
        />
        <Input 
          placeholder='Nome'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          leftIconContainerStyle={styles.iconStyle}
        />
        <Input
          placeholder='Sobrenome'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          leftIconContainerStyle={styles.iconStyle}
        />
        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          leftIconContainerStyle={styles.iconStyle}
        />
        <Input
          placeholder='Senha'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          leftIconContainerStyle={styles.iconStyle}
          secureTextEntry={true}
        />
        <Input 
          placeholder='Confirmação de Senha'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          leftIconContainerStyle={styles.iconStyle}
          secureTextEntry={true}
        />
        <Button 
          title='Me Inscreva'
          buttonStyle={ styles.loginButton }
        />
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    alignItems:'center',
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