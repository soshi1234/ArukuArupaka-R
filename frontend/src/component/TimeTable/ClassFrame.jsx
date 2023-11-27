import React from 'react';
import {Text, View} from 'react-native';

const ClassFrame = (props) => {
  return (
    <View
      style={{
        color:'black',
        width:'20%',
        backgroundColor:'white',
        height:'100%',
        lineHeight:35,
        marginLeft:1,
        marginRight:1,
        borderWidth: 1,
        borderColor: '#888888',
        borderRadius: 10, 
      }}>
      <Text style={{
                color:'black',
                textAlign:'center', 
            }}>{props.className}</Text>
    </View>
  );
};
export default ClassFrame;