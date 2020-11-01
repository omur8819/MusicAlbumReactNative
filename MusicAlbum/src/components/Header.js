import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// const Header = (props) => {
//     const { textStyle } = styles;
//     const { viewStyle } = styles;
//     return (
//         <View style={viewStyle}>
//             <Text style={textStyle}>{props.headerText}</Text>
//         </View>
//     );
// };
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'wheat',
    
    
    

    
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderWidth: 5,
    borderRadius: 15,
    width: 350,
    height: 50,
    marginTop: 30,
    alignSelf: 'center',
    borderColor: 'wheat',
  }

});

export default Header;