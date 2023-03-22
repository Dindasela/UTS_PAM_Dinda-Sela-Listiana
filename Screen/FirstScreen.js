import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FirstScreen ( { navigation } ) {
    return (
    <ImageBackground 
        style={styles.background} 
        source={require("../assets/wallpaper_makanan.jpg")}>
            <Image source={require("../assets/judul.png")} style={styles.gambar}/>

            <Text style={styles.textbox}>Macam Makanan Tradisional Indonesia</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <AntDesign name='rightcircle' size={50} color="black"/>
          </TouchableOpacity>
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "contain",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin:20,
        top:-220,
        right:0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
  },
  gambar: {
    top:100,
    width: 300,
    height: 400,
    resizeMode:"contain",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  textbox: {
    bottom:150,
    fontSize:20,
    color: "white",
    resizeMode: "contain",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  }
});
