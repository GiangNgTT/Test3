// import React from "react";
// import {Text,View,FlatList,TouchableWithoutFeedback,} from "react-native";

// const Products = ({navigation}) => {
//   return (
//     <View>
//       <FlatList
//         data={[
//           { key: "Devin" },
//           { key: "Dan" },
//           { key: "Jillian" },
//           { key: "Jimmy" },
//           { key: "Julie" },
//         ]}
//         renderItem={({ item }) => (
//           <TouchableWithoutFeedback onPress={() => actionOnRow(item)}>
//             <View>
//               <Text>{item.key}</Text>
//             </View>
//           </TouchableWithoutFeedback>
//         )}
//       />
//     </View>
//   );
// };

// const actionOnRow = (item) => {
//    const value = "Selected Item : "+ item;
//   alert(value);
// };
// export default Products;

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'HÀ NỘI',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'ĐÀ NẴNG',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'SÀI GÒN',
  },
];

const Products = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map', {
           
              });
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
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
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default Products;
