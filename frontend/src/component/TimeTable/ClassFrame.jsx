import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';


const ClassFrame = (props) => {
  const frameDetail={
    day:props.day,
    period:props.period,
  }
  return (
    <TouchableOpacity
      style={{
        color:'black',
        width:'100%',
        backgroundColor:'white',
        height:'100%',
        lineHeight:35,
        marginLeft:1,
        marginRight:1,
        borderWidth: 1,
        borderColor: '#888888',
        borderRadius: 10, 
      }}onPress={()=>{props.onEventCallBack(frameDetail)}}>
      <Text style={{
                marginTop:5,
                color:'black',
                textAlign:'center', 
                height:60,
            }}>{props.className}</Text>
            <Text style={{
              color:'black',
              textAlign:'center',
              bottom:0,
              fontSize:12,
              }}>{props.TimeTableDate.classRoom}</Text>
    </TouchableOpacity>
  );
};
export default ClassFrame;