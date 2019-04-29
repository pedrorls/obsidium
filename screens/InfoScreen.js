import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { CommentBalloon } from '../components/CommentBalloon';
import { moral_carac, moral_what, moral_denun, sexual_carac, sexual_denun, sexual_what } from '../constants/Explanations';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Informações',
  };

  render() {
    return (
    <ScrollView style={styles.container}>
      <Card
        title='Assédio Moral'
      >
        <Text style={styles.header}>{`\u2022 O que é?`}</Text>
        <CommentBalloon text={moral_what} />
        <Text style={styles.header}>{`\u2022 Como se caracteriza?`}</Text>
        <CommentBalloon text={moral_carac} />
        <Text style={styles.header}>{`\u2022 Como denunciar?`}</Text>
        <CommentBalloon text={moral_denun} />
      </Card>
      <Card
        title='Assédio Sexual'
      >
        <Text style={styles.header}>{`\u2022 O que é?`}</Text>
        <CommentBalloon text={sexual_what} />
        <Text style={styles.header}>{`\u2022 Como se caracteriza?`}</Text>
        <CommentBalloon text={sexual_carac} />
        <Text style={styles.header}>{`\u2022 Como denunciar?`}</Text>
        <CommentBalloon text={sexual_denun} />
      </Card>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    fontSize: 18,
  },
  container: {
    marginBottom: 10,
  }
})
