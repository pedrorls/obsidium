import React from 'react';

import Feed from '../components/Feed';


export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Feed',
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