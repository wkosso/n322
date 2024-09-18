import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { Link,router } from 'expo-router'
import { Image,  ScrollView,} from 'react-native-web';
import { ImageBackground } from 'react-native-web';

export default function products() {
  return (
    <ScrollView>
    <View style={styles.container}> 



    <View style={styles.headerbox}>
    <Text style={styles.titleText}>Protein-based Tacos</Text>
</View>
{/* header end */}

<View style={styles.Proteinbox}>
<View style={styles.menuItem}>
<Image  source={require('../../assets/images/AdobeStock_357513764.jpeg')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Meat Tacos</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> Barbacoa (slow-cooked beef), Pollo Asado (grilled chicken).</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>

      {/* part 2 of products */}

      <View style={styles.menuItem}>
<Image  source={require('../../assets/images/AdobeStock_664726749_Preview.jpeg')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Seafood Tacos</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> Fish Tacos (grilled or fried), Shrimp Tacos.</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>


</View>

{/* next section */}



<View style={styles.headerbox}>
    <Text style={styles.titleText}> Preparation Style Tacos</Text>
</View>


<View style={styles.Proteinbox2}>
<View style={styles.menuItem}>
<Image  source={require('../../assets/images/AdobeStock_725309572.png')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Soft Tacos</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> Made with soft corn or flour tortillas, typically filled with grilled or cooked ingredients.</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>

      {/* part 2 of products */}

      <View style={styles.menuItem}>
<Image  source={require('../../assets/images/AdobeStock_840738900.jpeg')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Hard Shell Tacos: </span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> Made with a crispy, fried corn tortilla, usually filled with ground beef.</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>


</View>


{/* Section 3 */}


<View style={styles.headerbox}>
    <Text style={styles.titleText}> Regional Tacos</Text>
</View>


<View style={styles.Proteinbox2}>
<View style={styles.menuItem}>
<Image  source={require('../../assets/images/Tacos-Al-Pastor-Mexico-City-Mexico-Recipe-Copyright-2022-Terence-Carter-Grantourismo-T.webp')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Tacos al Pastor:</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> From central Mexico, featuring spit-grilled pork with pineapple</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>

      {/* part 2 of products */}

      <View style={styles.menuItem}>
<Image  source={require('../../assets/images/AdobeStock_879763807_Preview.jpeg')} style={{width:200, height:150,}}/>

{/* textbox */}

<View style={styles.itemsBtn}>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} >Name: <span style={styles.highlight}>Tacos de Barbacoa: </span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Description:<span style={styles.highlight}> Slow-cooked beef, traditionally from northern Mexico.</span> </Text>
<Text style={{fontSize:15,color:'black', fontWeight:'bold'}} > Price:<span style={styles.highlight}>$25</span> </Text>
</View>

<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Order" color="#841584" style={styles.prodButton} ></Button></Link>
</View>

      
      </View>


</View>







</View>

</ScrollView>
   
  )

  
}



const styles = StyleSheet.create({

  headerbox: {
width:'100%',
height:30,
backgroundColor:'#cc9fc6',
alignItems:'center',
marginBottom:20,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
   
  },

  highlight: {
    color: 'purple',
    fontWeight: 'bold',
  
  },

  itemsBtn:{

width:400,

  },


  Proteinbox:{
 
    justifyContent:'space-around',
    flexDirection:'row',
    marginBottom:10,
  flexWrap:'wrap'
  },
  Proteinbox2:{

    justifyContent:'space-around',
    flexDirection:'row',
    marginBottom:10,
    
    width:'100%',
    flexWrap:'wrap'
   
  }


});