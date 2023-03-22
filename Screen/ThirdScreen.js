import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Audio } from 'expo-av';

// const fetchFont = () => {
//     return Font.loadAsync({ 'NotoSerif': require('../assets/fonts/NotoSerif-Regular.ttf')});
// };

export default function ThirdScreen ( { navigation , route} ) {
    let dirName = route.params.name;
    let dirDesc = route.params.desc;
    let audio = route.params.srcAudio;
    const [fontsLoaded, setfontLoaded] = useState(false);
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/audio/Naspad.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    // if(!fontsLoaded){
    //     return (
    //         <AppLoading 
    //             startAsync={fetchFont}
    //             onError={() => console.log('ERROR')}
    //             onFinish={() => {
    //                 setfontLoaded(true);
    //             }}
    //         />
    //     )}

    return (
      <View style={styles.background}>
        <TouchableOpacity onPress={playSound}>
          <AntDesign name='play' size={50} color="black"/>
        </TouchableOpacity>
        <Text style={styles.text1}>{dirName}{audio}</Text>
        <Text style={styles.text2}>{dirDesc}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <AntDesign name='leftcircle' size={50} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  gambar: {
    width: 400,
    height: 400,
    resizeMode:"contain",
    top:30,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  button: {
    position:"absolute",
    margin:10,
    bottom:10,
    left:10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 30,
    // fontFamily: 'NotoSerif'
  },
  text2: {
    fontSize: 20,
    padding:15,
    textAlign: 'justify',
    // fontFamily:'NotoSerif',
}
});
