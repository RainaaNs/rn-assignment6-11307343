import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const cartproducts = [
    {
        id:1,
        image: require('../assets/dress1.png'), 
        overlayImage: require('../assets/remove.png'),
        title1: 'OFFICE WEAR',
        title2: 'Office wear for your office',
        title3: '$120'
    },
    {
        id:2,
        image: require('../assets/dress4.png'), 
        overlayImage: require('../assets/remove.png'),
        title1: 'LAMEREI',
        title2: 'Recycle Boucle Knit Cardigan Pink',
        title3: '$120'
    },
    {
        id:3,
        image: require('../assets/dress3.png'), 
        overlayImage: require('../assets/remove.png'),
        title1: 'CHURCH WEAR',
        title2: 'Recycle Boucle Knit Cardigan Pink',
        title3: '$120'
    }
]



const CartList = () => {
    const renderItem = ({item}) => (
        <View style={{flexDirection:'row'}}>
            <View>
                <Image style={styles.cartImage} source={item.image}/>
            </View>
            <Image style={styles.removeImage} source={item.overlayImage}/>
            <View>
            <Text style={styles.textPosition}>
               <View>
                    <View>
                        <Text style={styles.title1}>{item.title1}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title2}>{item.title2}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title3}>{item.title3}
                        </Text>
                    </View>
                </View>
            </Text>
            </View>
        </View>
    )

    return(
     
        <FlatList
        data = {cartproducts}
        renderItem = {renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={CheckoutFooter}
        numColumns={1}
        contentContainerStyle={styles.cartListContainer}
    />
    );

}
const CheckoutFooter = () => (
    <View style={{marginTop:120}}>
        <View style={styles.estline}>
            <View><Text style={styles.este}>EST. TOTAL</Text></View>
            <View><Text style={styles.estMoney}>$240</Text></View>
        </View>
        <View style={styles.blackfooter}></View>
        <View style={{ top:-40}}>
            <View style={styles.checkoutview}>
                <View style={{marginHorizontal:10}}>
                    <Image style={styles.shoppingImage} source={require('../assets/shoppingBag.png')}/>
                </View>
                <View>
                    <Text style={styles.footcheckoutext}>CHECKOUT</Text>
                </View>
            </View>
        </View>
    </View>
    
)

const styles = StyleSheet.create({
    cartListContainer:{
    marginTop:25,
    paddingBottom:50
  },
  removeImage:{
    position: 'absolute',
    zIndex:1,
    top: 100,
    left: 305,
  },
  cartImage:{
    width:100,
    height:130, 
    marginBottom:25,
    marginLeft:28,
  },
  textPosition:{
    marginLeft:13, 
    marginBottom:22,
    marginTop:25
  },
  title1:{
        fontSize:14,
        marginTop:3,
        fontFamily:'tenorsans'
    },
    title2:{
        fontSize:12,
        marginTop:3,
        color:'#555555',
        fontFamily:'tenorsans'
    },
    title3:{
        fontSize:16,
        marginTop:3,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    estline:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    marginHorizontal:37, 
    marginLeft:25,
    marginBottom: 17
    },
    este:{
        marginTop:6,
        fontSize:14,
        fontFamily:'tenorsans'
    },
    estMoney:{
        fontSize:20,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    blackfooter:{
        backgroundColor:'black', 
        height:60
    },
    checkoutview:{
        flexDirection:'row', 
        justifyContent:'center'
    },
    footcheckoutext:{
        color:'white', 
        fontSize:16, 
        fontFamily:'tenorsans' 
    },
    shoppingImage:{
        tintColor:'white', 
        width:26, 
        height:26, 
        top:-3 }
    
  

})

export default CartList;