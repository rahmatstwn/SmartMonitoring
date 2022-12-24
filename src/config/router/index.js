import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import MainScreen from './BottomTab';
// import DetailScreen from '../../screens/DetailScreen';
// import LoginScreen from '../../screens/auth/LoginScreen';
// import RegisterScreen from '../../screens/auth/RegisterScreen';
import Home from '../../screen/HalHome';
import HalSuhu from '../../screen/HalSuhu';
import HalPH from '../../screen/HalPH';
import HalTDS from '../../screen/HalTDS';
import HalUkuran from '../../screen/HalUkuran';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HalSuhu"
        component={HalSuhu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HalPH"
        component={HalPH}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HalTDS"
        component={HalTDS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HalUkuran"
        component={HalUkuran}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
