import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { Link,router } from 'expo-router'
import { Image,  ScrollView,} from 'react-native-web';
import { ImageBackground } from 'react-native-web';


export default function home() {
  return (
<ScrollView>
    <View style={styles.container}> 

        

  
{/* 
homeimage section */}
      <View style={styles.homeImg}>

      <ImageBackground source={require('../../assets/images/ori_3516610_443283fa0bb1e93804d44633c0013615b3edb031_mexican-food-tacos-burrito-and-nachos-vector-seamless-background.jpg')} resizeMode="cover" style={styles.image}  >


      <View style={styles.textContainer}>
<Text style={styles.baseText} >Taco 'Bout a Fiesta! 🌮 Fresh, Flavorful, and Ready to Satisfy!</Text>
</View>

<View style={styles.homeBtn}>
<Link href="/products" >
<Button title="Discover" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      </ImageBackground>
      </View>



{/* Highlights section */}
<View><Text style={{color: 'orange', fontSize:'25px', fontWeight:'Bold',  textAlign:'center'}}>Menu Highlights</Text></View>
      

<View style={styles.menuHigh}>


<View style={styles.menuItem}>
<Image  source={require('../../assets/images/Tacos-Al-Pastor-Mexico-City-Mexico-Recipe-Copyright-2022-Terence-Carter-Grantourismo-T.webp')} style={{width:200, height:120,}}/>
<Text style={{fontSize:13,color:'orange', fontWeight:'bold'}} > Taco Al Pastor</Text>
<Text style={{fontSize:13,color:'purple', fontWeight:'bold'}} > Marinated pork with fresh pineapple.</Text>

</View>

<View style={styles.menuItem}>
<Image  source={require('../../assets/images/Roasted-Vegetarian-Tacos.jpg')} style={{width:200, height:130,}}/>
<Text style={{fontSize:13,color:'orange', fontWeight:'bold'}} > Veggie Tacos</Text>
<Text style={{fontSize:13,color:'purple', fontWeight:'bold'}} > Grilled veggies, avocado, and salsa.</Text>

</View>


<View style={styles.menuItem}>
<Image  source={require('../../assets/images/dc1a2e47-430d-460f-97ba-eb1c8b8f9354.png')} style={{width:200, height:120}}/>

<Text style={{fontSize:13,color:'orange', fontWeight:'bold'}} > Fish Tacos</Text>
<Text style={{fontSize:13,color:'purple', fontWeight:'bold'}} > Crispy fish fillets with tangy slaw and a zesty lime crema.</Text>

</View>


</View>



{/* Call to Action section */}






    </View>

  
    </ScrollView>


  )
}




const styles = StyleSheet.create({
  container: {
    flex: 3,
 
  },

  textContainer:{
    // flex: 1 ,
    // justifyContent: 'center',
   
  },

  baseText: {
   
    fontWeight: 'bold',
    fontSize:40,
    color: 'purple',
    textAlign:'center'

  
    
  },

  homeImg:{
    flex:1,
    justifyContent:'space-between',

    backgroundColor: 'orange',
    
  },
  image: {
   
    justifyContent: 'center',
    width:'100%',
    height:270,

  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },


  prodButton:{
    padding:(5,10),
    backgroundColor:'purple',
    textAlign: "center",
    width:40,
    borderRadius:100,
  
  },


  homeBtn:{
    
    justifyContent:'center',
    alignItems:'center',
    
  
  },

  menuHigh:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  width:'100%',
  height:200,
  marginTop:25,
 
  padding:10,
 
 flexWrap:'wrap',
 
  },

  menuItem: {
    width: 200,
   
   },


});
