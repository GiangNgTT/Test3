import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Homepage = ({navigation}) => {
  return (
    <View styl={styles.background_home}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingVertical: 30,
        }}>
        Home
      </Text>
      <Button
        title="Go to products"
        onPress={() => {
          navigation.navigate('Products', {
            headerTitle: 'Products',
          });
        }}
      />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    width: '100%',
    height: 800,
  },
});
