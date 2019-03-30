import React from 'react';
import { View, TextInput } from 'react-native';

import styles from '../styles/commentInputArea';

const TextArea = (props) =>
  <View style={ styles.container }>
    <TextInput
      underlineColorAndroid='transparent'
      placeholder='Escreva seu comentário ...'
      placeholderTextColor='#dedede'
      multiline={true}
      numberOfLines={40}
      style={ styles.textarea }
      onChangeText={ props.onChangeText }
      value={ props.value }
    />
  </View>


export default TextArea;