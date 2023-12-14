import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import {useState} from 'react'


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
    paddingTop:2,
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
    with:'100%',
    alignContent:'right',
    justifyContent: 'right',
    textAlign:'right',
    alignItems:'right',
    flexDirection:'row',


  },
  InfoTextTest:{
    width:80,
    textAlign:'center',
    //alignItems:'center',
    //backgroundColor:'blue',
    fontSize:18,
  },
  TextInputInfo:{ 
    width: 80,
    borderBottomWidth: 1,
    backgroundColor: "#D9D9D9",
    fontSize:14,
    height:24,
    marginTop:0,
    marginBottom:0,
    padding:0,
    paddingLeft:5,
  },
  TextInputText:{
    color:'red,'
  },
  backText:{
    width:80,
    //textAlign:'center',
    //alignItems:'center',
    //backgroundColor:'blue',
    fontSize:18,
    width:100,
  }
})

const TimeTableInfo = (props) => {
  const [infoDetail,setInfoDetail]=useState({
    day:props.day,
    period:props.period,
    classRoom:props.pushFramDetail.classRoom,
    className:props.pushFramDetail.className,
    memo:props.pushFramDetail.memo,
    notification:props.pushFramDetail.notification,
  })
  console.log(infoDetail);
  const a=1;
  return (
    <View style={styles.infoDaialog}>
        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>授業</Text>
          <TextInput style={styles.TextInputInfo} autoFocus={true} clearTextOnFocus={true} onChangeText={(text) =>{setInfoDetail((prev)=>{prev.className=text; return prev});}}><Text>{infoDetail.className}</Text></TextInput>
          <Text style={styles.backText}></Text>
        </View>

        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>教室</Text>
          <TextInput style={styles.TextInputInfo} onChangeText={(text) =>{setInfoDetail((prev)=>{prev.classRoom=text; return prev});}}><Text>{infoDetail.classRoom}</Text></TextInput>
          <Text style={styles.backText}></Text>
        </View>


        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>メモ</Text>
          <TextInput style={styles.TextInputInfo} onChangeText={(text) =>{setInfoDetail((prev)=>{prev.memo=text; return prev});}}>
            <Text>{infoDetail.memo}</Text>
          </TextInput>
          <Text style={styles.backText}></Text>
        </View>

        <View style={styles.InfoText}>
          <Text style={styles.InfoTextTest}>通知時間</Text>
          <TextInput style={styles.TextInputInfo} onChangeText={(text) =>{setInfoDetail((prev)=>{prev.notification=text; return prev});}}>
            <Text>{infoDetail.notification}</Text>
          </TextInput>
          <Text style={styles.backText}>  に通知する</Text>
        </View >
        <View style={{flexDirection:'row',flex:1,}}>
          <TouchableOpacity style={[styles.determinationButton,{backgroundColor:'#D9D9D9'}]} onPress={()=>{props.onEventCallBack();props.onSudmit(infoDetail)}}><Text style={{color:'#595959',fontSize:18,}}>OK</Text></TouchableOpacity>
          <TouchableOpacity style={styles.determinationButton} onPress={()=>{props.onEventCallBack()}}><Text style={{color:'#595959'}}>キャンセル</Text></TouchableOpacity>
        </View>
    </View>
  );
};
export default TimeTableInfo;