import _ from 'lodash';
import React from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

import Comment from '../components/Comment';
import TextArea from '../components/CommentArea'
import styles from '../styles/comment';

export default class Comments extends React.Component {
  static navigationOptions = {
    title: 'Comentários',
  };

  state = {
    comments:[
      {
        photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        comment: 'Batman may have made the front page but Bruce Wayne got pushed to page eight.',
        name: 'Batgirl',
        data: '29/03/2019'
      },
      {
        photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        comment: 'Batman may have made the front page but Bruce Wayne got pushed to page eight.',
        name: 'Batgirl',
        data: '29/03/2019'
      },
      {
        photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        comment: 'Batman may have made the front page but Bruce Wayne got pushed to page eight.',
        name: 'Batgirl',
        data: '29/03/2019'
      },
      {
        photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        comment: 'Batman may have made the front page but Bruce Wayne got pushed to page eight.',
        name: 'Batgirl',
        data: '29/03/2019'
      },
      {
        photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        comment: 'Batman may have made the front page but Bruce Wayne got pushed to page eight.',
        name: 'Batgirl',
        data: '29/03/2019'
      }
    ]
  };

  render() {
    return(
      <KeyboardAvoidingView style={{ flex: 1}} behavior='padding'>
        <ScrollView>
          {
            _.map(this.state.comments, (k, v) =>
              <Comment
                photoUrl={k.photoUrl}
                comment={k.comment}
                name={k.name}
                data={k.data}
              />
            )
          }
        </ScrollView>
        <View style={styles.postCommentStyle}>
          <TextArea />
          <Button buttonStyle={styles.buttonStyle} title='Enviar' />
        </View>
      </KeyboardAvoidingView>
    );
  }
}