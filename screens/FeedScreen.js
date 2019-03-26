import React from 'react';
import { Button } from 'react-native-elements';
import Feed from '../components/Feed';


class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Feed',
    headerRight: <Button onPress={ () => {navigation.push('Post')} } title="Criar Post" buttonStyle={{ backgroundColor: '#FDA50F', marginRight: 14 }}/>
  });

  onProfilePress() {
    console.log('Profile pressed!');
  }

  onCardPress() {
    console.log('Card pressed!');
  }

  onSupportPress() {
    console.log('Support!');
  }

  onCommentsPress() {
    console.log('Should change to Comment component!')
  }

  render() {
    console.log(this.props);
    return(
      <Feed
        onCardPress={this.onCardPress}
        onCommentsPress={this.onCommentsPress}
        onSupportPress={this.onSupportPress}
        onProfilePress={this.onProfilePress}
      />
    );
  }
}

export default FeedScreen;