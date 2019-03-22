import React from 'react';
import { Button } from 'react-native-elements'; 
import Feed from '../components/Feed';


export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Feed',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Criar Post"
        buttonStyle={{ backgroundColor: '#FDA50F', marginRight: 14 }}
      />)
  };

  onSupportPress() {
    console.log('Support!');
  }

  onCommentsPress() {
    console.log('Should change to Comment component!')
  }

  render() {
    return(
      <Feed
        onCommentsPress={this.onCommentsPress}
        onSupportPress={this.onSupportPress}
      />
    );
  }
}