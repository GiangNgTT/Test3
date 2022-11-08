import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Ch%C3%B9a_Tr%E1%BA%A5n_Qu%E1%BB%91c_%28H%C3%A0_N%E1%BB%99i%29.jpg',
    title: 'HÀ NỘI',
    city: "HN"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUVs2ZlZa_ZWpOWvz-r8G2T3M0VrLiyYx7w&usqp=CAU',
    title: 'ĐÀ NẴNG',
    city: "DN"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSzbJ01agVTSnweSUOWfRxP2u-NJkPUD0SA&usqp=CAU',
    title: 'SÀI GÒN',
    city: "HCMC"
  },
];

const Products = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {

              navigation.navigate('Map', {city: item.city});
            }}>
            <View style={styles.item}>
              <View style={styles.province}>
                <Image style={styles.img} source={{uri: item.image}} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  province: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img: {
    height: 120,
    width: 150
  },
  title: {
    fontSize: 32,
    marginLeft: 15,
  },
});

export default Products;
