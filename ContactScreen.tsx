import React from 'react';
import { SectionList, StyleSheet,Linking, Text, View, Image, ScrollView } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import  styles  from './styles';
import BottomNav from './BottomNav';


export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}> Email: info@empoweringthenation.co.za</Text>
      <Text style={styles.description}> Phone: +27 31 679 4012</Text>
      <Text style={styles.description}> Locations:</Text>

      <Text style={styles.locationItem}>• Johannesburg CBD – 45 Commissioner St</Text>
      <Text style={styles.locationItem}>• Randburg – 12 Beyers Naudé Dr</Text>
      <Text style={styles.locationItem}>• Soweto – 88 Main Rd</Text>

      <BottomNav />
    </ScrollView>
  );
}
