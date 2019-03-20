import React from 'react';

import SignUp from '../components/SignUp';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Inscrever-se',
  };
  render() {
    return(
      <SignUp />
    );
  }
}

export default SignUpScreen;