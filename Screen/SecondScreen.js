import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function SecondScreen({navigation}){
    const DATA = [
        { name: 'Gudeg', key: '10', desc:'Gudeg (bahasa Jawa: ꦒꦸꦝꦼꦒ꧀, translit. Gudhěg) adalah hidangan khas Provinsi Yogyakarta dan Jawa Tengah yang terbuat dari nangka muda yang dimasak dengan santan. Perlu waktu berjam-jam untuk membuat hidangan ini. Warna coklat biasanya dihasilkan oleh daun jati yang dimasak bersamaan.', srcAudio: 'Gudeg.mp3'},
        { name: 'Tumpeng', key: '11', desc: 'Tumpeng atau nasi tumpeng adalah makanan masyarakat Jawa yang penyajian nasinya dibentuk kerucut dan ditata bersama dengan lauk-pauknya. Olahan nasi yang dipakai umumnya berupa nasi kuning, nasi putih biasa, atau nasi uduk.', srcAudio: 'Tumpeng.mp3'},
        { name: 'Pempek', key: '12', desc: 'Pempek adalah salah satu makanan tradisional asal Palembang provinsi Sumatera Selatan. Makanan ini terbuat dari bahan dasar sagu dan ikan karena di Bangka masyarakatnya mayoritas nelayan dan merupakan provinsi tetangga dari Palembang, oleh karena itu pempek mudah ditemui di kepulauan Bangka Belitung.', srcAudio: 'Pempek.mp3'},
        { name: 'Nasi Padang', key: '13', desc: 'Nasi padang adalah sebuah hidangan yang disajikan secara lengkap secara prasmanan dengan daging, ikan, sayuran, dan makanan pedas dimakan dengan nasi putih, itu adalah komoditas ekspor paling terkenal dan masyarakat Minangkabau mempunyai kontribusi yang besar untuk masakan Indonesia.', srcAudio: 'Nasi Padang.mp3'},
        { name: 'Nasi Liwet', key: '14', desc:'Nasi liwet (bahasa Jawa: ꦱꦼꦒ​ꦭꦶꦮꦼꦠ꧀, translit. sêgå liwêt; bahasa Sunda: ᮞᮍᮥ ᮜᮤᮝᮩᮒ᮪) adalah hidangan nasi khas Indonesia yang dimasak dengan santan, kaldu ayam, dan rempah-rempah[1] Nasi kukus biasanya dimasak dalam air, tetapi nasi liwet adalah nasi yang dimasak dengan santan, kaldu ayam, daun salam dan serai, sehingga memberikan nasi rasa yang kaya, aromatik, dan gurih.[2] Nasi liwet adalah cara memasak nasi tradisional Jawa dengan santan. Ada juga varian nasi liwet ala Sunda yang berbeda rasa dan penyajiannya.', srcAudio: 'Nasi Liwet.mp3'},
    ];

    return(
        <ImageBackground
            style={styles.background} 
            source={require("../assets/wallpaper_makanan.jpg")}>
            <View style={{marginTop:60, height:750, width:Dimensions.get("screen").width}}>
                <FlashList
                data={DATA}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Third' ,item)}>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    )}
                estimatedItemSize={200}
            />
            </View>
            
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <AntDesign name='leftcircle' size={50} color="black"/>
                </TouchableOpacity>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("screen").width,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item: {
        flex:1,
        marginTop:20,
        width:350,
        padding:20,
        borderWidth:1,
        borderColor:"black",
        borderRadius:0,
        fontSize: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        backgroundColor : "white",
    },
    button: {
        margin:20,
        top:-220,
        right:0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
  });