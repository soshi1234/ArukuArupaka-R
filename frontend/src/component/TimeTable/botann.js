import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from 'react-native';

const Bottan = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [smallImagePosition, setSmallImagePosition] = useState({x: 0, y: 0});
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const alphabets = ['A', 'B', 'C', 'D', 'E'];
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const [currentImage, setCurrentImage] = useState(null);

  const handleAlphabetPress = alphabet => {
    if (!isSwitchOn) {
      // Switchがオフの場合のみ処理を実行
      if (selectedAlphabet === alphabet) {
        // 同じアルファベットが再度押された場合、非選択状態にする
        setSelectedAlphabet(null);
        setSelectedNumber(null); // アルファベットが再度選択された場合、画像も非表示にする
        setCurrentImage(null); // アルファベットが非選択状態になったら、現在の画像をリセット
      } else {
        setSelectedAlphabet(alphabet);
      }
    }
  };

  const handleNumberPress = number => {
    if (!isSwitchOn) {
      // Switchがオフの場合のみ処理を実行
      setSelectedNumber(number);
    }
  };

  const handleImagePress = event => {
    if (selectedAlphabet && selectedNumber && !isSwitchOn) {
      const {locationX, locationY} = event.nativeEvent;

      // 小さい画像の幅と高さの半分
      const smallImageWidth = 50; // 小さい画像の幅
      const smallImageHeight = 50; // 小さい画像の高さ

      // クリックされた位置から小さい画像の中心に配置するための計算
      const x = locationX - smallImageWidth / 2;
      const y = locationY - smallImageHeight / 2;

      setSmallImagePosition({x, y});
      setCurrentImage(`${selectedAlphabet}${selectedNumber}`);
    }
  };

  const toggleSwitch = () => {
    setIsSwitchOn(prevState => !prevState);
    setIsSaving(prevState => !prevState); // Switchの状態に基づいてisSaving状態を更新
  };

  const getImageForCombination = () => {
    if (selectedAlphabet && selectedNumber) {
      const imageName = `${selectedAlphabet}${selectedNumber}`;
      switch (imageName) {
        case 'A1':
          return require('./map.png'); // Update the file path
        case 'A2':
          return require('./map.png');
        // Add cases for other combinations
        case 'A3':
          return require('./map.png');
        case 'A4':
          return require('./map.png');
        case 'A5':
          return require('./map.png');
        case 'A6':
          return require('./map.png');
        case 'A7':
          return require('./map.png');
        case 'B1':
          return require('./map.png');
        case 'B2':
          return require('./map.png');
        // Add cases for other combinations
        case 'B3':
          return require('./map.png');
        case 'B4':
          return require('./map.png');
        case 'B5':
          return require('./map.png');
        case 'B6':
          return require('./map.png');
        case 'C1':
          return require('./map.png');
        case 'C2':
          return require('./map.png');
        // Add cases for other combinations
        case 'C3':
          return require('./map.png');
        case 'C4':
          return require('./map.png');
        case 'C5':
          return require('./map.png');
        case 'C6':
          return require('./map.png');
        case 'D1':
          return require('./map.png');
        case 'D2':
          return require('./map.png');
        // Add cases for other combinations
        case 'D3':
          return require('./map.png');
        case 'D4':
          return require('./map.png');
        case 'D5':
          return require('./map.png');
        case 'D6':
          return require('./map.png');
        case 'E1':
          return require('./map.png');
        case 'E2':
          return require('./map.png');
        // Add cases for other combinations
        case 'E3':
          return require('./map.png');
        case 'E4':
          return require('./map.png');
        case 'E5':
          return require('./map.png');
        case 'E6':
          return require('./map.png');
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <View>
      <View style={styles.switchContainer}>
        <Text>固定する</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isSwitchOn}
        />
      </View>
      <View style={styles.selectedTextContainer}>
        <Text style={styles.selectedText}>
          {isSaving
            ? `${selectedAlphabet} - ${selectedNumber}に保存中`
            : `${selectedAlphabet} - ${selectedNumber}を表示中`}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.alphabetContainer}>
          {alphabets.map((alphabet, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.alphabetButton,
                getColorForAlphabet(alphabet),
                selectedAlphabet === alphabet && styles.selectedAlphabet,
              ]}
              onPress={() => handleAlphabetPress(alphabet)}
              disabled={isSwitchOn} // Switchがオンの場合、ボタンを無効にする
            >
              <Text style={styles.alphabetText}>{alphabet}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.spacing} />
        <View style={styles.numberContainer}>
          <View style={styles.numberimageContainer}>
            {selectedAlphabet && (
              <View style={styles.numberButtons}>
                {numbers.map((number, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.numberButton,
                      selectedNumber === number && styles.selectedNumber,
                      getColorForAlphabet(selectedAlphabet),
                    ]}
                    onPress={() => handleNumberPress(number)}
                    disabled={isSwitchOn} // Switchがオンの場合、ボタンを無効にする
                  >
                    <Text style={styles.numberText}>{number}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {selectedAlphabet && selectedNumber && (
              <View
                style={styles.imageContainer}
                onTouchEnd={event => handleImagePress(event)}>
                <Image source={getImageForCombination()} style={styles.image} />
                {smallImagePosition.x > 0 &&
                  smallImagePosition.y > 0 &&
                  currentImage === `${selectedAlphabet}${selectedNumber}` && (
                    <View
                      style={[
                        styles.smallImage,
                        {left: smallImagePosition.x, top: smallImagePosition.y},
                      ]}>
                      {/* ここに小さい画像の要素を追加 */}
                      {/* 例: <Image source={require('./smallImage.png')} style={styles.smallImage} /> */}
                      <Image
                        source={require('./bike20.png')}
                        style={styles.smallImage}
                      />
                    </View>
                  )}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const getColorForAlphabet = alphabet => {
  switch (alphabet) {
    case 'A':
      return {borderColor: 'darkred'};
    case 'B':
      return {borderColor: 'darkblue'};
    case 'C':
      return {borderColor: 'darkorange'};
    case 'D':
      return {borderColor: 'darkpurple'};
    case 'E':
      return {borderColor: 'darkgreen'};
    default:
      return {borderColor: 'darkgray'};
  }
};

const styles = StyleSheet.create({
  alphabetText: {
    fontSize: 30, // Set the desired font size for alphabet text
    paddingLeft: '25%',
    paddingBottom: '15%',
  },
  numberText: {
    fontSize: 30, // Set the desired font size for number text
    paddingLeft: '25%',
    paddingBottom: '15%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  alphabetContainer: {
    marginTop: 200,
    right: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alphabetButton: {
    width: 61,
    height: 61,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedAlphabet: {
    backgroundColor: 'lightblue',
  },
  spacing: {
    width: 10, // ボタンとボタンの間の感覚を設定
  },
  numberContainer: {
    paddingTop: 20,
    right: 90,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numberimageContainer: {
    flexDirection: 'row',
  },
  numberButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  numberButton: {
    width: 61,
    height: 61,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedNumber: {
    backgroundColor: 'lightgreen',
  },
  imageContainer: {
    marginLeft: 30,
  },
  image: {
    width: 166,
    height: 525,
  },
  smallImage: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  selectedTextContainer: {
    marginLeft: '55%',
  },
  selectedText: {
    fontSize: 20,
    color: 'blue',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: '55%',
    marginTop: '5%',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Bottan;
