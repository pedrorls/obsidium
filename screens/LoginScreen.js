import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Input, Image, Text, SocialIcon } from 'react-native-elements';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props){
    super(props);

    this.id = '2264498587106890';
    this.state = {
      email: '',
      password: '',
    };
    this.navigate = this.props.navigation.navigate;
  }

  facebookLogin = async () => { 
    const {type, token} =  await Expo.Facebook.logInWithReadPermissionsAsync(this.id, {permissions: [ 'public_profile', 'email'] });   
    if (type == 'success'){            
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        );
        const userFacebookInfo = await response.json();
        console.log(userFacebookInfo);
    }else{
        console.log("Login cancelado");
    } 
}

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}
      >
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
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
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
          onPress={ this.facebookLogin }
        />
        <Button
          title='Inscrever-se'
          type='clear'
          style={styles.loginButton}
          onPress={ () => this.navigate('Signup') }
        />
      </KeyboardAvoidingView>
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
