import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Button from './Button';


const Detay = (props) => {
  return (
    <View style={styles.containerStyle}>

      <View style={styles.subContainerStyle}>
        <Text>{props.data.title} </Text>
      </View>

      <View style={styles.subContainerStyle}>
        <Image style={styles.ImageStyle} source={{uri: props.data.image}} />

      </View>
      <View style={styles.subContainerStyle}>
        <Button onPress={() => Linking.openURL(props.data.url)}> BUY THE ALBUM </Button>
      </View>

    </View>
    
  );
};

// const Detay = ({data}) => {
//   return (
//     <Text>{data.title} </Text>
//   );
// };


export default Detay;

const styles = StyleSheet.create({

  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  },
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  ImageStyle: {
    height: 300,
    flex: 1,

  },
  titleStyle: {
    fontSize: 18,
  },
  ImageStyle: {
    height: 300,
    flex: 1,
  },
})

