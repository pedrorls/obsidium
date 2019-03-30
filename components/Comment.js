import React from 'react';
import { View, Text  } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

import styles from '../styles/comment';

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.commentStyle}>
        <Text>{props.comment}</Text>
      </View>
      <View style={styles.headerStyle}>
        <Avatar rounded source={{ uri: `${props.photoUrl}` }} />
        <Text style={styles.nameStyle}>{props.name}</Text>
        <Text style={styles.dataStyle}>{props.data}</Text>
      </View>
    </View>
  );
}

export default Comment;