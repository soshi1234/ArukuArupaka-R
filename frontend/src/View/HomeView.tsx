import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//カラーコード定義
//ライトテーマ用
const DefaultCol: string = '#30CB89';
const BackGroundCol: string = '#FFFFFF';
const OnBackGroundCol: string = '#F8F8F8';
const ButtonCol: string = '#EEEEEE';
const OnButtonCol: string = '#888888';
const TextCol: string = '#010101';

//ダークテーマ用
/*
const DefaultCol : string =  '#1ED661';
const BackGroundCol : string = '#101010';
const OnBackGroundCol : string = '#242424';
const ButtonCol : string = '#595959';
const OnButtonCol : string = '#CCCCCC';
const TextCol : string = '#FFFFFF';
*/

//共通カラー
const WarningCol: string = '#EB3637';
const YellowCol: string = '#FFCB08';
const BlueCol: string = '#1BB1E7';
const OrangeCol: string = '#F36F21';
const GreenCol: string = '#00A651';


//コンポーネントの変数定義
type HeaderlistProps = {
  url: string;
};

type ApplistProps = {
  url: string;
  appName: string;
  color: string;
  natigation: string;
};


const Headerlist = (props: HeaderlistProps) => {
  return (

    <View style={styles.homeSetting}>
      <Image style={{ width: 24, height: 24, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }} source={{ uri: props.url }} />
    </View>
  );
};

const AppList = (props) => {
  return (
    <View style={{ height: 65, width: 140, borderColor: props.color, borderWidth: 2, borderRadius: 10, flexDirection: 'row', alignItems: 'center', margin: 10, padding: 3 }}>
      <TouchableOpacity onPress={() => { props.test.navigation.navigate(props.jumpPage)}}>
       <Icon name={props.iconName} size={40} color={props.color} />
        <Text style={{ fontSize: 20, textAlign: 'center', left: '10%', fontFamily: 'Roboto' }}>{props.appName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Date = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Text style={[styles.dateStyle, { fontSize: 24 }]}>11</Text>
        <Text style={styles.dateStyle}>月</Text>
        <Text style={[styles.dateStyle, { fontSize: 24 }]}>22</Text>
        <Text style={styles.dateStyle}>日</Text>
        <Text style={[styles.dateStyle, { fontSize: 24 }]}>（</Text>
        <Text style={[styles.dateStyle, { fontSize: 24 }]}>水</Text>
        <Text style={[styles.dateStyle, { fontSize: 24 }]}>）</Text>
      </View>
      <View style={{ borderBottomWidth: 1, width: '60%', position: 'absolute', bottom: '0%', right: '0%' }}></View>
    </View>
  );
};

const Carousel = () => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.carouselMove}></View>
        <View style={styles.carousel}></View>
        <View style={styles.carouselMove}></View>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
        <View style={styles.carouselSequence}></View>
        <View style={[styles.carouselSequence, { backgroundColor: '#30CB89' }]}></View>
        <View style={styles.carouselSequence}></View>
        <View style={styles.carouselSequence}></View>
        <View style={styles.carouselSequence}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  dateStyle: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  headerListStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 20
  },
  topScreen: {
    width: '100%',
    height: 38,
    backgroundColor: 'rgba(235, 54, 55, 0.30)'
  },
  profileIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#000000',
    borderRadius: 9999,
    position: 'absolute',
    top: 22,
    left: 28
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  appListFlex: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
  text: {
    marginLeft: 120,
    color: '#000000',
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  homeSetting: {
    margin: 3,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#EB3637',
    borderRadius: 9999,
    backgroundColor: '#ffffff',
  },
  carousel: {
    width: 272,
    height: 186,
    backgroundColor: '#F8F8F8',
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  carouselSequence: {
    width: 10,
    height: 10,
    backgroundColor: '#BBBBBB',
    borderRadius: 9999,
    margin: 3,
  },
  carouselMove: {
    width: 60,
    height: 60,
    backgroundColor: '#F8F8F8',
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 9999,
  },

})



const HomeView = (props) => {
  return (
    // <View>
    //   <View>
    //     <TouchableOpacity onPress={()=>{props.navigation.navigate('Bike')}}>
    //       <Text>駐輪場</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //       <TouchableOpacity onPress={()=>{props.navigation.navigate('TimeTable')}}>
    //         <Text>教室通知</Text>
    //       </TouchableOpacity>
    //     </View>
    // </View>

    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1, width: 340, height: 200 }}>
      <View style={styles.topScreen}></View>
      <View style={styles.profileIcon}></View>
      <View style={styles.headerListStyle}>
        <Headerlist url='https://cdn-icons-png.flaticon.com/512/126/126472.png' />
        <Headerlist url='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/640px-Home-icon.svg.png' />
      </View>
      <View style={{ marginLeft: 5, marginRight: 5, marginBottom: 20, flex: 1 }}>
        <View style={{ marginTop: 5 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>歩くアルパカ</Text>
          <Text style={[styles.text, { fontSize: 24 }]}>マイページ</Text>
        </View>
        <Date></Date>
        <Text style={styles.title}>新着情報</Text>
        <Carousel></Carousel>
        <Text style={styles.title}>機能一覧</Text>
        <View style={{ flex: 10 }}>

          <View style={styles.appListFlex}>
            <AppList appName='駐輪場' color={OrangeCol} test={props} jumpPage="Bike" iconName="bicycle"/>
            <AppList appName='天気' color={WarningCol} test={props} jumpPage="weather" iconName="weather-cloudy" />
          </View>
          <View style={styles.appListFlex}>
            <AppList appName='マップ' color={BlueCol} iconName="map-marker" />
            <AppList appName='時間割' color={GreenCol} test={props} jumpPage="TimeTable" iconName="file-table" />
          </View>
          <View style={styles.appListFlex}>
            <AppList appName='SNS' color={YellowCol} iconName="transit-connection-variant" />
            <AppList appName='' color={DefaultCol} iconName="transit-connection-variant" />
          </View>
          <View style={styles.appListFlex}>
            <AppList appName='' color={DefaultCol} url='https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png' />
            <AppList appName='' color={DefaultCol} url='https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png' />
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
