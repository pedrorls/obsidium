import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  picker: {
    height: 50,
    width: 350,
  },
  input: {
    height: 200,
    borderWidth: 1,
    borderColor: '#fff'
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FDA50F',
    alignSelf: 'center'
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20 
  }
});

export default styles;