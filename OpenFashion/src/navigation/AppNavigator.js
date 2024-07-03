import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const CustomHeader = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={{marginLeft:19, width:30, height:30}} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View style={{marginLeft:93}}>
        <Image style={{width:95, height:35}} source={require('../assets/Logo.png')}/>
      </View>

      <View style={{flexDirection:'row', marginLeft:38}}>
        <Image style={{marginHorizontal:10, width:33, height:33, marginTop:-1}} source ={require('../assets/Search.png')}/>
        <Image  style={{ width:30, height:30}} source ={require('../assets/shoppingBag.png')}/>
      </View>
      
    </View>
  );
};
const CustomHeaderCart = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft:143}}>
       <Image style={{width:95, height:35}} source={require('../assets/Logo.png')}/>
      </TouchableOpacity>


      <View style={{flexDirection:'row', marginLeft:78}}>
        <Image style={{width:33, height:33, marginTop:-1}} source ={require('../assets/Search.png')}/>
      </View>
      
    </View>
  );
};



const AppNavigator = () => {
    const navigation = useNavigation(); 

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" 
                           component={HomeScreen}
                           options={{ headerLeft: () => <CustomHeader/>,
                                      headerTitle:''}}
            />
            <Drawer.Screen name="Cart" 
                           component={CartScreen}
                           options={{ headerLeft: () => <CustomHeaderCart/>,
                            headerTitle:''}}
            />
        </Drawer.Navigator>
  );
};

export default AppNavigator;








