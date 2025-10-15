// BottomNav.tsx
import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import  styles  from './styles';
import bottomNav from './BottomNav';


export default function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <FontAwesome name="home" size={32} color="#12232" style={styles.navIcon} onPress={() => navigation.navigate('HomeScreen')} />
      <FontAwesome name="book" size={32} color="#12232" style={styles.navIcon} onPress={() => navigation.navigate('CoursesScreen')} />
      <FontAwesome name="calculator" size={32} color="#12232" style={styles.navIcon} onPress={() => navigation.navigate('FeeCalculatorScreen')} />
      <FontAwesome name="address-book" size={32} color="#12232" style={styles.navIcon} onPress={() => navigation.navigate('ContactScreen')} />
    </View>
  );
}
