import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Image, Text, Icon, SocialIcon } from 'react-native-elements';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/logo.png')}
        />
        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          leftIconContainerStyle={styles.iconStyle}
          onChangeText={ email => this.setState({ email }) }
          value={ this.state.email }
        />
        <Input
          placeholder='Senha'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}c
          leftIconContainerStyle={styles.iconStyle}
          secureTextEntry={true}
          onChangeText={ password => this.setState({ password }) }
          value={ this.state.password }
        />
        <Button
          buttonStyle={styles.loginButton}
          title='Entrar'
          type="solid"
          
        />
        <Text>OU</Text>
        <SocialIcon
          title='Entrar com Facebook'
          button
          type='facebook'
          style={styles.loginButton}
          raised={false}
        />
        <Button
          title='Inscrever-se'
          type='clear'
          style={styles.loginButton}
          onPress={ () => this.props.navigate('SignIn ') }
        />
      </View>
    );
  }
}

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
