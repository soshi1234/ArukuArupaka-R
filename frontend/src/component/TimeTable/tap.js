import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

class ImageScrollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickX: null,
      clickY: null,
      disableChangePosition: false,
    };
    this.scrollViewRef = React.createRef();
  }

  handleImageClick = event => {
    if (!this.state.disableChangePosition) {
      const {locationX, locationY} = event.nativeEvent;
      const {width: imageWidth, height: imageHeight} =
        this.getImageDimensions();
      const clickXOnImage =
        (locationX * imageWidth) / this.getScrollViewWidth();
      const clickYOnImage =
        (locationY * imageHeight) / this.getScrollViewHeight();
      this.setState({clickX: clickXOnImage, clickY: clickYOnImage});
    }
  };

  getScrollViewWidth = () => {
    return 1453; // 大きな画像の幅
  };

  getScrollViewHeight = () => {
    return 454; // 大きな画像の高さ
  };

  getImageDimensions = () => {
    return {width: 1453, height: 454}; // 大きな画像の幅と高さ
  };

  scrollToPosition = yPosition => {
    this.scrollViewRef.current.scrollTo({y: yPosition, animated: true});
  };

  toggleChangePosition = () => {
    // クリックしたときに表示する画像の位置変更可能性を切り替える
    this.setState(prevState => ({
      disableChangePosition: !prevState.disableChangePosition,
    }));
  };

  scrollToClickPosition = () => {
    // クリックした位置にスクロール
    const {clickX, clickY} = this.state;
    if (clickX !== null && clickY !== null) {
      const scrollX =
        (clickX * this.getScrollViewWidth()) / this.getImageDimensions().width -
        200;
      this.scrollToPosition(scrollX);
      // スクロールが水平方向の場合
      // this.scrollToPosition(scrollY); // スクロールが垂直方向の場合
    }
  };

  render() {
    return (
      <View>
        <ScrollView
          ref={this.scrollViewRef}
          horizontal={true}
          style={{width: '100%', height: 454, marginTop: 11}}>
          <Image
            source={require('./map.png')}
            style={{width: 1453, height: 454, marginTop: '-80'}}
          />

          <TouchableOpacity
            onPress={this.handleImageClick}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: this.getScrollViewWidth(),
              height: this.getScrollViewHeight(),
            }}>
            {/* クリックした位置で画像を表示 */}
            {this.state.clickX !== null && this.state.clickY !== null && (
              <Image
                source={require('./bike20.png')}
                style={{
                  width: 50,
                  height: 50,
                  top: this.state.clickY - 25,
                  left: this.state.clickX - 25,
                  position: 'absolute',
                }}
              />
            )}
          </TouchableOpacity>
        </ScrollView>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginRight: 330,
              bottom: 260,
              transform: [{rotate: '90deg'}],
            }}>
            瀬田方面
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 330,
              bottom: 285,
              transform: [{rotate: '90deg'}],
            }}>
            守山方面
          </Text>
        </View>
        <View style={{marginLeft: '45%'}}>
          <Text style={{fontSize: 25, bottom: 515}}>南草津駅</Text>
        </View>
        <View style={{marginLeft: '50%', bottom: 150}}>
          <Text style={{fontSize: 25}}>大学</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#30CB89',
            width: 183,
            height: 46,
            borderRadius: 66,
            bottom: 95,
            marginLeft: 188,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./push_pin.png')}
              style={{marginLeft: 10}}
            />
            <Text
              style={{
                marginRight: 5,
                color: 'white',
                fontSize: 16,
                fontWeight: 400,
              }}>
              {' '}
              固定する
            </Text>
          </View>
          <Switch
            value={this.state.disableChangePosition}
            onValueChange={this.toggleChangePosition}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={
              this.state.disableChangePosition ? '#f5dd4b' : '#f4f3f4'
            }
          />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', bottom: 62}}>
          <TouchableOpacity
            onPress={() => this.scrollToPosition(0)}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#ffa081',
              paddingLeft: 18,
              borderRadius: 4,
              marginLeft: 46,
            }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 6.5,
                paddingTop: 2,
                fontWeight: 400,
                color: '#010101',
              }}>
              A
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.scrollToPosition(200)}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#fd97bc',
              paddingLeft: 18,
              borderRadius: 4,
              marginLeft: 41,
            }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 6.5,
                paddingTop: 2,
                fontWeight: 400,
                color: '#010101',
              }}>
              B
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.scrollToPosition(530)}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#384cfe',
              paddingLeft: 18,
              borderRadius: 4,
              marginLeft: 41,
            }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 6.5,
                paddingTop: 2,
                fontWeight: 400,
                color: '#010101',
              }}>
              C
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.scrollToPosition(900)}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#ff74b7',
              paddingLeft: 18,
              borderRadius: 4,
              marginTop: 12,
              marginLeft: 46,
            }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 6.5,
                paddingTop: 2,
                fontWeight: 400,
                color: '#010101',
              }}>
              D
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.scrollToPosition(1453)}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#2EDF60',
              paddingLeft: 18,
              borderRadius: 4,
              marginTop: 12,
              marginLeft: 41,
            }}>
            <Text
              style={{
                fontSize: 30,
                paddingLeft: 6.5,
                color: '#010101',
                paddingTop: 2,
                fontWeight: 400,
              }}>
              E
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.scrollToClickPosition}
            style={{
              height: 52,
              width: 72,
              borderWidth: 3,
              borderColor: '#000',
              borderRadius: 4,
              paddingTop: 0,
              marginTop: 12,
              marginLeft: 41,
            }}>
            <Image source={require('./bike20.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ImageScrollComponent;
