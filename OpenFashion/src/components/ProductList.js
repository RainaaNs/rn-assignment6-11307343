import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useCart } from "../context/CartProvider";



const products = [
   {id:1, 
        image: require('../assets/dress1.png'), 
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Office Wear',
        title2: 'reversible angora cardigan',
        title3: '$120'
    },
    {
        id: 2,
        image: require('../assets/dress2.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Black',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      {
        id: 3,
        image: require('../assets/dress3.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Church Wear',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      {
        id: 4,
        image: require('../assets/dress4.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Lamerei',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      {
        id: 5,
        image: require('../assets/dress5.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: '21WN',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      {
        id: 6,
        image: require('../assets/dress6.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Lopo',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      {
        id: 7,
        image: require('../assets/dress7.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: '21WN',
        title2: 'reversible angora cardigan',
        title3: '$120'
      },
      
      {
        id: 8,
        image: require('../assets/dress4.png'),
        overlayImage: require('../assets/add_circle.png'),
        removeImage: require('../assets/remove.png'),
        title1: 'Lame',
        title2: 'aratogas summer dress',
        title3: '$120'
      },
];

const ProductList = () => {
    const { addToCart } = useCart();

    const renderItem = ({item}) => (
        <View>
            <View>
                <TouchableOpacity style={styles.addcircleImage} onPress={() => addToCart(item)}>
                    <Image source={item.overlayImage}/>
                </TouchableOpacity>
                <Image style={styles.productImage} source={item.image}/>
            </View>
            <Text style={{marginLeft:9, marginBottom:22}}>
               <View style={styles.titles}>
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
    );

    return (
        <FlatList
            data = {products}
            renderItem = {renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productListContainer}
        />

    )
}

const styles = StyleSheet.create({
    productListContainer:{
        marginHorizontal:20,
        marginLeft:15,
        paddingBottom:80,
        maxHeight:'auto'
    },
    title1:{
        fontSize:14,
        marginTop:9,
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
        marginTop:9,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    titles:{
        flexDirection:'column'
        
    },
    productImage:{
        marginHorizontal:7
    },
    addcircleImage:{
        position: 'absolute',
        zIndex:1,
        top: 190,
        left: 137,
  
    }

})

export default ProductList;