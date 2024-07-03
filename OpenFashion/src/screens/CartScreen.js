import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CartList from '../components/CartList';


const CartScreen = () => {
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <View style={styles.checkout} >
        <View>
          <Text style={styles.checkoutText}>
            C H E C K O U T
          </Text>
        </View>
        <View>
          <Image style={styles.checkoutline} source={require('../assets/checkoutline.png')}/>
        </View>
      </View>

      <View>
        <CartList/>
      </View>

      
      
    </View>
   
   
    
  );
};

const styles = StyleSheet.create({
  checkout:{
    flexDirection:'column',
    marginTop:11,
    alignItems:"center"
  },
  checkoutText:{
    fontSize:16,
    fontFamily:'tenorsans'
  },
  checkoutline:{
   height:13,
   width:133
  }
  
  
})

export default CartScreen;

