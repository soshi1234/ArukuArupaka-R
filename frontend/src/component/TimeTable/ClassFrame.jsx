import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';


const ClassFrame = (props) => {
  return (
    <TouchableOpacity
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
      }}onPress={()=>{props.onEventCallBack()}}>
      <Text style={{
                color:'black',
                textAlign:'center', 
            }}>{props.className}</Text>
    </TouchableOpacity>
  );
};
export default ClassFrame;