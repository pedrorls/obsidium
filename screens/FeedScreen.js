import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Post from '../components/Post';


class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Feed',
    headerRight: <Button onPress={ () => {navigation.push('Post')} } title="Criar Post" buttonStyle={{ backgroundColor: '#FDA50F', marginRight: 14 }}/>
  });

  state = {
    cardWasPressed: 0,
    list: [
      {
        id: 1,
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        build: 'CCT',
        complain: 'Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra. Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra. Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra. Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra. Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra.',
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
      {
        id: 3,
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        build: 'CCT',
        complain: 'Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra.',
        supports: 10,
        comments: [{}, {}, {}],
        created_at: '10/02/2019'
      },
      {
        id: 4,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        build: 'CBB',
        complain: 'É verão o ano todo vem cumpadi. É esse que a gente quer, é ele que nóis vamo buscar. Vem porra! Não vai dá não. Vamo monstro! Tá comigo porra.',
        supports: 33,
        comments: [{}, {}, {}],
        created_at: '12/03/2019'
      },
      {
        id: 5,
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        build: 'CCT',
        complain: 'Aqui é Body Builder Ipsum PORRA! Ele tá olhando pra gente. Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Ó o homem ali porra!, é 13 porra! Vamo monstro! Sai filho da puta! Boraaa, Hora do Show Porra.',
        supports: 10,
        comments: [{}, {}, {}],
        created_at: '10/02/2019'
      },
      {
        id: 6,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        build: 'CBB',
        complain: 'É verão o ano todo vem cumpadi. É esse que a gente quer, é ele que nóis vamo buscar. Vem porra! Não vai dá não. Vamo monstro! Tá comigo porra.',
        supports: 33,
        comments: [{}, {}, {}],
        created_at: '12/03/2019'
      },
    ],
  }

  onProfilePress() {
    console.log('Profile pressed!');
  }

  onCardPress = (id) => {
    console.log('Card pressed: ', id);
    //this.setState({ cardWasPressed: id});
  }

  onSupportPress() {
    console.log('Support!');
  }

  onCommentsPress() {
    this.props.navigation.push('Comment');
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        {
          list.map((post, i) => 
              <Post
                key={ post.id }
                post={ post }
                cardWasPressed={ this.state.cardWasPressed }
                onCardPress={ this.onCardPress }
                onCommentsPress={ this.onCommentsPress }
                onSupportPress={ this.onSupportPress }
                onProfilePress={ this.onProfilePress }
              />
          )
        }
      </View>
    );
  }
}

export default FeedScreen;