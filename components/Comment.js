import React from 'react';
import { View, Text  } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from '../styles/comment';
import { CommentBalloon } from './CommentBalloon';

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <CommentBalloon text={props.comment} />
      <View style={styles.headerStyle}>
        <Avatar rounded source={{ uri: `${props.photoUrl}` }} />
        <Text style={styles.nameStyle}>{props.name}</Text>
        <Text style={styles.dataStyle}>{props.data}</Text>
      </View>
    </View>
  );
}

export default Comment;