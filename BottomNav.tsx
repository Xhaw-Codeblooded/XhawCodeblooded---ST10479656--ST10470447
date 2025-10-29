
import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import  styles  from './styles';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from './App';
import { StackNavigationProp } from '@react-navigation/stack'


type NavigationProps = StackNavigationProp<RootStackParamList>;


function BottomNav() {
  const navigation = useNavigation<NavigationProps>();


   return (
    <View style={styles.bottomNavFixed}>
      {/* HOME */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={32} color="#122332" style={styles.navIcon} />
      </TouchableOpacity>
      
      {/* COURSES */}
      <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
        <FontAwesome name="book" size={32} color="#122332" style={styles.navIcon} />
      </TouchableOpacity>

      {/* FEE CALCULATOR */}
      <TouchableOpacity onPress={() => navigation.navigate('FeeCalculator')}>
        <FontAwesome name="calculator" size={32} color="#122332" style={styles.navIcon} />
      </TouchableOpacity>
      
      {/* CONTACT */}
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <FontAwesome name="address-book" size={32} color="#122332" style={styles.navIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNav;

