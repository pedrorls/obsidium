import {createStackNavigator, } from 'react-navigation'

import PostScreen from '../screens/PostScreen';

const CommonStack = createStackNavigator({
  Post: PostScreen,
});

export default CommonStack;