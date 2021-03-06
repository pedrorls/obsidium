import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  commentStyle: {
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 20,
    padding: 20
  },
  nameStyle: {
    marginHorizontal: 10
  },
  dataStyle: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#dedede'
  },
  buttonStyle: {
    backgroundColor: '#FDA50F',
    borderRadius: 20,
    width: 90,
    height: 70,
  },
  postCommentStyle: {
    alignItems: 'center',
    backgroundColor: '#fefefe',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 80
  }
});

export default styles;