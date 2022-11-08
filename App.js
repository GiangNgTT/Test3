import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import {enableLatestRenderer} from 'react-native-maps';
import Products from './src/screens/Home/component/Products';
import Map from './src/screens/Home/component/Map';

enableLatestRenderer();
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          options={({route, navigation}) => {
            return {
              headerTitleAlign: 'center',
              title: 'Products',
            };
          }}
          name={'Products'}
          component={Products}
        />

        <Stack.Screen
          options={({route, navigation}) => {
            return {
              headerTitleAlign: 'center',
              title: 'Map',
            };
          }}
          name={'Map'}
          component={Map}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
