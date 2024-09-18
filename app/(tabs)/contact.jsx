import { View, Text,TextInput,StyleSheet,ImageBackground, } from 'react-native'
import { Button } from 'react-native-web'
import { Link,router } from 'expo-router'
import React, { useState } from 'react';


export default function contact() {

  const [name, setName] = useState('');
  return (
    <View>
     


      <ImageBackground source={require('../../assets/images/AdobeStock_269943255.jpeg')} resizeMode="cover"  style={{width:'100%',height:1000,}}>

      <Text style={{fontSize:30,fontWeight:'bold', color:'purple', textAlign:'center',
        marginTop:20
      }} >Taco Eats Contact page</Text>

<View style={styles.formcontainer}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="name...."
        value={name}
       
      />


<Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="name...."
        value={name}
       
      />


<Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="name...."
        value={name}
       
      />
<View style={styles.homeBtn}>
<Link href="/" >
<Button title="Submit" color="#841584" style={styles.prodButton} ></Button></Link>
</View>
       </View>


</ImageBackground>


    </View>




  )
}




const styles = StyleSheet.create({

  input: {
    height: 50,
    margin: 5,
    borderWidth: 3,
    borderColor:'orange',
   
     width:'50%',
   
 
  },

  label: {
    fontSize: 20,
   
    fontWeight:'bold',
    color:'purple'
  },
 formcontainer:{
alignItems:'center',
justifyContent:"space-between",
  width:'100%',
 
 }

  

});