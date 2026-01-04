import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Easing, StatusBar, View } from 'react-native';
import { ScreenNames } from '../constants/AppConstants';
import { Colors } from '../constants/Colors';
import * as Screen from '../index';

const Stack = createStackNavigator();
const ModalStack = createNativeStackNavigator();

const MainNavigation = props => {
  const _addScreen = (name, component, option) => {
    return (
      <Stack.Screen name={name} component={Screen[name]} options={option} />
    );
  };

  const addModalScreen = (name, component, option) => {
    return (
      <ModalStack.Screen name={name} component={component} options={option} />
    );
  };

  const MainStackScreen = () => {
    // console.log("props?.initialRouteName::", props?.initialRouteName);
    return (
      <Stack.Navigator
        initialRouteName={props?.initialRouteName}
        // initialRouteName={"Account"}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: '',
          orientation: 'portrait',
        }}
      >
        {/* {_addScreen(
          ScreenNames.BOTTOMTABNAVIGATION,
          {},
          { headerShown: false, gestureEnabled: false },
        )} */}
        
        {_addScreen(
          ScreenNames.LOGINCONTAINER,
          {},
          { headerShown: false },
        )}
       
      </Stack.Navigator>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'red'}
      />
      <NavigationContainer>
        <ModalStack.Navigator
          initialRouteName="MainStackScreen"
          screenOptions={{
            headerShown: false,
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: '',
            orientation: 'portrait',
          }}
        >
          {addModalScreen('MainStackScreen', MainStackScreen)}
        </ModalStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigation;
