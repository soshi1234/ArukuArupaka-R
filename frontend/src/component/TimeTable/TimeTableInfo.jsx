import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';



const styles=StyleSheet.create({
  infoDaialog:{
    alignItems:'center',
    zIndex: 10,
    elevation: Platform.OS === 'android' ? 100 : 0,
    position:'absolute',
    width:"80%",
    //backgroundColor:'F8F8F8',
    backgroundColor:'#F8F8F8',
    height:200,
    left:0,
    borderRadius:4,
    flexDirection:'column',
  },
  determinationButton:{
    alignItems:'center',
    flex:1,
    marginRight:'10%',
    marginLeft:'10%',
    marginTop:4,
    marginBottom:8,
    borderRadius:400,
    zIndex:20,
  },
  InfoText:{
    flex:1,
    alignContent:'right',
    justifyContent: 'right'

  },
  InfoTextTest:{
    width:80,
    textAlign:'center',
    //alignItems:'center',
    //backgroundColor:'blue',
    fontSize:18,
  }
})

const TimeTableInfo = (props) => {
  return (
    <View style={styles.infoDaialog}>
        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>教室</Text>
          <TextInput style={{         width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc"}}><Text>aa</Text></TextInput>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>授業</Text>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>メモ</Text>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>通知時間</Text>
        </View >
        <View style={{flexDirection:'row',flex:1,}}>
          <TouchableOpacity style={[styles.determinationButton,{backgroundColor:'#D9D9D9'}]} onPress={()=>{props.onEventCallBack()}}><Text style={{color:'#595959',fontSize:18,}}>OK</Text></TouchableOpacity>
          <TouchableOpacity style={styles.determinationButton} onPress={()=>{props.onEventCallBack()}}><Text style={{color:'#595959'}}>キャンセル</Text></TouchableOpacity>
        </View>
    </View>
  );
};
export default TimeTableInfo;