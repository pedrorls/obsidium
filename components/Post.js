import _ from 'lodash';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Card, ListItem } from 'react-native-elements'

import BadgedIcon from './BadgedIcon';
import styles from '../styles/post';

const truncate = (text) => {
  if(text.length > 200){
    return text.substring(0, 197) + '...'
  }
  return text
}

const Post = (props) =>
    <ScrollView>
          <Card>
            <TouchableOpacity onPress={ props.onProfilePress }>
              <ListItem
                leftAvatar={{ source: { uri: props.post.avatar_url }}}
                title={ props.post.name }
                subtitle={ props.post.build }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.onCardPress(props.post.id) }>
              <View>
                <Text>{ props.cardWasPressed === props.post.id ? props.post.complain : truncate(props.post.complain) }</Text>
              </View>
            </TouchableOpacity>
            <View style={ styles.badgeContainer }>
              <BadgedIcon type="ionicon" name="ios-hand" value={props.post.supports} text='Apoios' onPress={ props.onSupportPress }/>
              <BadgedIcon type="ionicon" name="ios-chatbubbles" value={props.post.comments.length} text='Comentários' onPress={ props.onCommentsPress }/>
              <Text>{ props.post.created_at }</Text>
            </View>
          </Card>
    </ScrollView>


export default Post;