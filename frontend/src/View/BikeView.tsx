import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ImageScrollComponent from '../component/TimeTable/tap.js';
import Bottan from '../component/TimeTable/botann.js';

const BikeView = () => {
  const [showImageScroll, setShowImageScroll] = useState(true);

  const toggleComponent = () => {
    setShowImageScroll(prev => !prev);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 60,
        }}>
        <TouchableOpacity
          onPress={() => setShowImageScroll(true)}
          style={{
            marginLeft: 10,
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: showImageScroll ? 'blue' : 'black',
            width: 100,
          }}>
          <Text style={{fontSize: 20}}>タップ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowImageScroll(false)}
          style={{
            marginLeft: 10,
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: showImageScroll ? 'black' : 'blue',
            width: 100,
          }}>
          <Text style={{fontSize: 20}}>ボタン</Text>
        </TouchableOpacity>
      </View>

      {showImageScroll ? <ImageScrollComponent /> : <Bottan />}
    </View>
  );
};

export default BikeView;
