import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'

import BadgedIcon from './BadgedIcon';

const truncate = (text) => {
  if(text.length > 200){
    return text.substring(0, 197) + '...'
  }
  return text
}

const Feed = (props) => {
  const list = [
    {
      id: 1,
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      build: 'CCT',
      complain: 'Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra.',
      supports: 10,
      comments: [{}, {}, {}],
      created_at: '10/02/2019'
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      build: 'CBB',
      complain: 'É verão o ano todo vem cumpadi. É esse que a gente quer, é ele que nóis vamo buscar. Vem porra! Não vai dá não. Vamo monstro! Tá comigo porra.',
      supports: 33,
      comments: [{}, {}, {}],
      created_at: '12/03/2019'
    },
  ];
  return (
    <View>
        {
          list.map((item, id) =>
          <Card>
            <ListItem
              key={ item.id }
              leftAvatar={{ source: { uri: item.avatar_url }}}
              title={ item.name }
              subtitle={ item.build }
            />
            <View>
              <Text>{ truncate(item.complain) }</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
              <BadgedIcon type="ionicon" name="ios-hand" value={item.supports} text='Apoios' onPress={ props.onSupportPress }/>
              <BadgedIcon type="ionicon" name="ios-chatbubbles" value={item.comments.length} text='Comentários' onPress={ props.onCommentsPress }/>
              <Text>{ item.created_at }</Text>
            </View>
          </Card>
          )
        }
    </View>
  );
}

export default Feed;