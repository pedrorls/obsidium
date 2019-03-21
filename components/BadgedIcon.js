import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon, Badge } from 'react-native-elements'

const BadgedIcon = ({ value, type, name, text, onPress }) => 
  <TouchableHighlight  onPress={onPress}>
    <View style={ styles.container }>
      <Icon name={name} type={type} />
      <Text>{ text }</Text>
      <Badge value={value} status='warning'/>
    </View>
  </TouchableHighlight>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default BadgedIcon;