import React from 'react';
import {Text, View,StyleSheet,useColorScheme,} from 'react-native';
import WeekFram from '../component/TimeTable/WeekFrame';
import ClassFrame from '../component/TimeTable/ClassFrame';
import TimeTableInfo from '../component/TimeTable/TimeTableInfo';
import {useState} from 'react'

const TimrTableView = () => {
  const [isShow,setIsShow]=useState(false)
  return (
    <View style={styles.bodys}>
      <View style={{left:'10%',top:110,}}>
      {isShow && <TimeTableInfo onEventCallBack={()=>{setIsShow(false)}}/>}
      </View>
      <View style={styles.tables}>
        <View style={styles.tableWeek}>
          <WeekFram weekDay={"Mon"}></WeekFram>
          <WeekFram weekDay={"Tue"}></WeekFram>
          <WeekFram weekDay={"Wed"}></WeekFram>
          <WeekFram weekDay={"Thu"}></WeekFram>
          <WeekFram weekDay={"Fri"}></WeekFram>
        </View>
        <View style={styles.tableKoma} >
          <ClassFrame week={1} time={1} className="在力" onEventCallBack={()=>{setIsShow(true)}}/>
          <ClassFrame className="在力リモートの変更"/>
          <ClassFrame className="在力さ"/>
          <ClassFrame className="在力"/>
          <ClassFrame className="在力a"/>
        </View>
        <View style={styles.tableKoma}>
          <Text style={styles.koma}>宇宙地球</Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
        </View>
        <View style={styles.tableKoma}>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}>力学３</Text>
          <Text style={styles.koma}>制御工学</Text>
          <Text style={styles.koma}></Text>
        </View>
        <View style={styles.tableKoma}>
          <Text style={styles.koma}>材料力学</Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}>専門ゼミナール</Text>
          <Text style={styles.koma}></Text>
        </View>
        <View style={styles.tableKoma}>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
        </View>
        <View style={styles.tableKoma}>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
          <Text style={styles.koma}></Text>
        </View>
      </View>
    </View>
  );
};
  const styles = StyleSheet.create({

    bodys:{
      backgroundColor:'F8F8F8',
      width:'100%',
      paddingTop:30,
      paddingBottom:0,
      paddingLeft:0,
      paddingRight:0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    tables:{
      //backgroundColor:'black',
      marginLeft:'10%',
      width:'85.52%',
      height:'80%',
      
    },
    tableWeek:{
      //backgroundColor:'#888888',
      height:35,
      width:'100%',
      flexDirection:'row',
    },
    weeks:{
      width:'20%',
      textAlign:'center', 
      backgroundColor:'#888888',
      height:'100%',
      lineHeight:35,
      marginLeft:1,
      marginRight:1,
    },
    tableKoma:{
      marginTop:2,
      height:90,
      width:'100%',
      flexDirection:'row',
    },
    koma:{
      color:'black',
      width:'20%',
      textAlign:'center', 
      backgroundColor:'white',
      height:'100%',
      lineHeight:35,
      marginLeft:1,
      marginRight:1,
      borderWidth: 1,
      borderColor: '#888888',
      borderRadius: 10,    
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default TimrTableView;
