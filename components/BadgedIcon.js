import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements'

const BadgedIcon = ({ value, type, name, text, onPress }) => 
  <TouchableOpacity  onPress={onPress}>
    <View style={ styles.container }>
      <Icon name={name} type={type} />
      <Text>{ text }</Text>
      <Badge value={value} status='warning'/>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default BadgedIcon;