import React from 'react';
import {Text, View,StyleSheet,useColorScheme,} from 'react-native';
import WeekFram from '../component/TimeTable/WeekFrame';
import ClassFrame from '../component/TimeTable/ClassFrame';
import TimeTableInfo from '../component/TimeTable/TimeTableInfo';
import {useState} from 'react'

const TimrTableView = () => {
  const [isShow,setIsShow]=useState(false)
  const weekTimeSaveData=[[{day:0,period:0,className:"1-1",classRoom:"てすとぉ",memo:"m",notification:"1"},{day:0,period:1,className:"1-2",classRoom:"",memo:"",notification:""},{day:0,period:2,className:"1-3",classRoom:"",memo:"",notification:""},{day:0,period:3,className:"1-4",classRoom:"",memo:"",notification:""},{day:0,period:4,className:"1-5",classRoom:"",memo:"",notification:""}],
    [{day:1,period:0,className:"2-1",classRoom:"",memo:"",notification:""},{day:1,period:1,className:"2-2",classRoom:"",memo:"",notification:""},{day:1,period:2,className:"2-3",classRoom:"",memo:"",notification:""},{day:1,period:3,className:"2-4",classRoom:"",memo:"",notification:""},{day:1,period:4,className:"火-5",classRoom:"",memo:"",notification:""}],
    [{day:2,period:0,className:"水-1",classRoom:"",memo:"",notification:""},{day:2,period:1,className:"水-2",classRoom:"",memo:"",notification:""},{day:2,period:2,className:"水-3",classRoom:"",memo:"",notification:""},{day:2,period:3,className:"水-4",classRoom:"",memo:"",notification:""},{day:2,period:4,className:"水-5",classRoom:"",memo:"",notification:""}],
    [{day:3,period:0,className:"木-1",classRoom:"",memo:"",notification:""},{day:3,period:1,className:"木-2",classRoom:"",memo:"",notification:""},{day:3,period:2,className:"木-3",classRoom:"",memo:"",notification:""},{day:3,period:3,className:"木-4",classRoom:"",memo:"",notification:""},{day:3,period:4,className:"木-5",classRoom:"",memo:"",notification:""}],
    [{day:4,period:0,className:"金-1",classRoom:"",memo:"",notification:""},{day:4,period:1,className:"金-2",classRoom:"",memo:"",notification:""},{day:4,period:2,className:"金-3",classRoom:"",memo:"",notification:""},{day:4,period:3,className:"金-4",classRoom:"",memo:"",notification:""},{day:4,period:4,className:"金-5",classRoom:"",memo:"",notification:""}],
  ]

  const [weekTime,setWeekTime]=useState(weekTimeSaveData);
  const [pushedClassFrameDetail,setPushedClassFrameDetail]=useState({
    day:"",
    period:"",
})
  const onSubmit=(classDetail)=>{
    //console.log(classDetail);
    setWeekTime((prev)=>{prev[classDetail.day][classDetail.period]=classDetail; return prev});
    //console.log(classDetail.day)
  }
  return (
    <View style={styles.bodys}>
      <View style={{left:'10%',top:110,}}>
      {isShow && <TimeTableInfo day={pushedClassFrameDetail.day} period={pushedClassFrameDetail.period} pushFramDetail={weekTime[pushedClassFrameDetail.day][pushedClassFrameDetail.period]} onEventCallBack={()=>{setIsShow(false)}} onSudmit={onSubmit}/>}
      </View>
      <View style={styles.tables}>
        <View style={styles.tableWeek}>
          <WeekFram weekDay={"Mon"}></WeekFram>
          <WeekFram weekDay={"Tue"}></WeekFram>
          <WeekFram weekDay={"Wed"}></WeekFram>
          <WeekFram weekDay={"Thu"}></WeekFram>
          <WeekFram weekDay={"Fri"}></WeekFram>
        </View>
        <View style={styles.timeTableClass}>
          {weekTime.map((weekTime1,index)=><View key={index} style={styles.rowClass}>{ weekTime1.map((weekTime2,index)=><ClassFrame key={index} TimeTableDate={weekTime2} day={weekTime2.day} period={weekTime2.period} className={weekTime2.className} onEventCallBack={(frameDetail)=>{setIsShow(true);setPushedClassFrameDetail(frameDetail)}}/>) }</View>)}
        
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
      width:'90%',
      height:'80%',
      
    },
    tableWeek:{
      //backgroundColor:'#888888',
      height:35,
      width:'100%',
      flexDirection:'row',
    },
    weeks:{
      flex:1,
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


    rowClass:{
      flexDirection:'column',
      flex:1,
      height:'100%',
    },
    timeTableClass:{
      flexDirection:'row',
      width:'100%',
      height:'25%',
      paddingRight:2,
    }
  });

export default TimrTableView;
