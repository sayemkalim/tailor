import { View, Text ,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
const image = './bg.jpg'
const Orderdetails = () => {
    
  return (
    <>
    <View style={{backgroundColor:'black',}}>
     {/* <View style={customStyle.customerDetails}>
        <ImageBackground source={require('./bg.jpg')} resizeMode="cover" style={{borderWidth: 5,borderColor:'white'}}>
     <Text style={{fontWeight:'bold',fontSize:18,marginLeft:5}}>Sayem Kalim </Text>
      <Text style={{margin:2,marginRight:5}}>Category - Shirt</Text>
      <Text style={{margin:2,marginRight:5}}>Size - M</Text>  
    </ImageBackground>  
   </View>  */}
      </View>
      </>
  )
}
const customStyle =StyleSheet.create({
    customerDetails :{
      backgroundColor:'black',
      marginTop:20,
      borderRadius: 12,  
    },
    customerDetails2 :{
        backgroundColor:'#fae6ff',
        marginTop:20,
        borderRadius: 8,
        borderWidth: 5,
        borderColor:'white'    

      }
  })
export default Orderdetails