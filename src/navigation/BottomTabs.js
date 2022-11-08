import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import Setting from '../screens/Setting';
import Products from '../screens/Home/component/Products';

const BottomTab = createBottomTabNavigator();

const iconHome =
  'data:image/png;base64,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';

const iconNotification =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACZmZmHh4d6enrZ2dm/v7/Gxsb09PTg4ODv7+/Pz8+ioqL5+fmUlJT8/PwbGxtXV1deXl6wsLBwcHDl5eUqKiozMzM6OjpAQEBJSUlSUlIlJSVzc3MLCwuEhIRERERlZWUBYgaSAAAEC0lEQVR4nO2dCVrjMAxGR10g3RLoSukC3P+SgyfDkNLEdRMtduZ/J9D77Fjy0urXLwAAAAAAAEDvWGRZtrAOQo5NfjgT0fmQb6xDEWF2oG9eZ9bhsFOM6JJRYR0SL9MX+sluah0UJ9MrP0ePFBe7WsNdf1bVda0g0do6MC4eGwSJHq1DY2LbaLi1Do2HWaMgUT/S4sljeLIOjoPi6DE89iHv1+fCLzLr8BjwfYb9+BCbc4WjD/kChukDw/SBYfJMc69hnvg2eDb0lWwlT8Nks/747emm3l/J0dg62PvJBvUnF03sBmlVqGPfjqmJUzoDOX5u4ed4TsNxsmzp51hOrMO/ybTN/Kxyijx9zDv6OebWEh427wyCRO/RXk0NWPwcA2uVWqaH25EHc4jwa/Qfx9xPdKUcxxJzSWQLzs/7Tw5G1lJV2hYxfp6ttf6x2IsIEu0juWDMrm+wuXiJY8Nx3zbpPnbWcp8UUlO0ZG9/ddNlJxHC0lpQIk1cYpw0+BP9Naapn7tUq8ewgMvOKoZnu5zxqiJI9GolqPERlhh9ihs1QSKbXb/WHHWYzNOVoiDRSl+wUBUk0q/e3pQN37QFNZeZEu3FpunJqBzKT+Am6oJEulcaXW8n2qA6iJmBoO4rP//rAylyPcEi9IKelye9nOh/IiOH3uMb6bOZJtTObPyvfiXRupHSrbmraNXfMrcUIWjdZJgJEukIWq2kDp3VVHvfVEVnD8Xz4KIdKqcZC0NBIo0bRZ1z7iY0zr/1Tknr0Dg51d/dV9H42ancnXYIL/KCRjunLxR2UPqHbJfIH7lZnEFVkT+PsqzZHPJ1m93WqUR+A8X3iLQd8k9PbY7ZvpE/cBsaGw5hCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhqGto/dM18R+vja39PhFt8xGDoKii/RQtEZuocYygQ2gU4xEUUoxlipYITNSYRtDBPoqxCbIrxjVFS1gnanwj6GAcxTgFGRVjnKIlTBM11hF0sIxizIIsivFO0ZLOEzXuEXR0HMX4BTsqxj5FSzpM1DQEuyg+WIceyAMMYRg9MIRh/MDwfzac5IMUyONv5g0AAACAlNmsRyGsbfo3chB6Fin6fkSU0JY7Wg1yBAg0tA6zA2FdyffWYXYg7I+jFfupsRPW7cOwK3V3tgGCW+sgOxHS0MS0d3pnQtruaDTHEeR2owGDXsa83OptbdY3nY1bdU3C9cwX/uI03ZK0gi8pJp0Kv2kexV6MoCOrb1y61GzwK83D8crvmHyauKRYXRZw25V+w3txNvOP3R+73ce8v3cpiyzLEq/SAAAAAAAAAHX8BqsLXuIag51+AAAAAElFTkSuQmCC';

const iconAuth =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi623Vp1SM-FkwcYMnZFIH9mwRKTvwWPdvA&usqp=CAU';

const iconProfile =
  'data:image/png;base64,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';

const iconSetting =
  'data:image/png;base64,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';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Products}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconHome,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NotificationTab"
        component={Notification}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Chat'}</Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconNotification,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ProfileTab"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Profile'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconProfile,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Setting'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconSetting,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
