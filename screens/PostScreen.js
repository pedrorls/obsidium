import _ from 'lodash';
import React from 'react';
import { View, Picker } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';

import styles from '../styles/post';
import Build from '../constants/Build';
import Lab from '../constants/Lab';
import Course from '../constants/Course';
import TextArea from '../components/TextArea';

class Post extends React.Component {
  static navigationOptions ={
    title: 'Criar Post'
  }

  state = {
    build: null,
    lab: null,
    course: null,
    report: null,
    checked: false
  }

  onSubmitPress() {
    console.log("Should send post!");
  }

  render() {
    return(
      <View styles={ styles.containerStyle }>
        <Input placeholder='Nome do denunciado' />
        <Picker
          selectedValue={this.state.build}
          style={ styles.picker }
          onValueChange={(itemValue) => this.setState({build: itemValue})}
        >
        { 
          _.map(Build, (key, value) =>  <Picker.Item key={value} label={key} value={value} /> )
        }
        </Picker>

        <Picker
          selectedValue={this.state.lab}
          style={ styles.picker }
          onValueChange={(itemValue) => this.setState({lab: itemValue})}
        >
        { 
          _.map(Lab, (key, value) =>  <Picker.Item key={value} label={key} value={value} /> )
        }
        </Picker>

        <Picker
          selectedValue={this.state.course}
          style={ styles.picker }
          onValueChange={(itemValue) => this.setState({course: itemValue})}
        >
        { 
          _.map(Course, (key, value) =>  <Picker.Item key={value} label={key} value={value} /> )
        }
        </Picker>

        <TextArea
          onChangeText={(text) => this.setState({ report: text })}
          value={ this.state.report }
        />

        <CheckBox
          title='Anônimo?'
          checked={ this.state.checked }
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

        <Button title='Enviar' buttonStyle={ styles.button } onPress={ () => this.onSubmitPress() }/>
      </View>
    )
  };
}

export default Post;
