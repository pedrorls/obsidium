import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles/comment';

export const CommentBalloon = props => 
  <View style={styles.commentStyle}>
    <Text>{props.text}</Text>
  </View>