import React from 'react';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Feed from '../components/Feed';


class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Feed',
    headerRight: <Button onPress={ () => {navigation.navigate('Post')} } title="Criar Post" buttonStyle={{ backgroundColor: '#FDA50F', marginRight: 14 }}/>
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
    this.props.navigation.navigate('Comment');
  }

  render() {
    return(
      <Feed
        onCardPress={this.onCardPress}
        onCommentsPress={ () => this.onCommentsPress() }
        onSupportPress={this.onSupportPress}
        onProfilePress={this.onProfilePress}
      />
    );
  }
}

export default FeedScreen;