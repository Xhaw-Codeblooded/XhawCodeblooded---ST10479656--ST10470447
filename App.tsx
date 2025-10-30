import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet,Linking, Text, View, Image, ScrollView, Dimensions, Alert } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import  { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements';
import styles  from './styles';
import BottomNav from './BottomNav'
import MapView, {Marker} from 'react-native-maps';




const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="FeeCalculator" component={FeeCalculatorScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}



function HomeScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Home'> }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
      <View style={styles.container}>
        {/* Logo and Title */}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./assets/EMP_LOGO.png')}
          />
          <Text style={styles.headerTitle}>EMPOWERING THE NATION</Text>
        </View>

        {/* Dropdown Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setDropdownVisible(!dropdownVisible)}
        >
          <Text style={styles.menuText}>HOME</Text>
          <FontAwesome name="caret-down" size={18} color="#222" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => { setDropdownVisible(false); navigation.navigate('Courses'); }}>
              <Text style={styles.dropdownItem}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setDropdownVisible(false);  navigation.navigate('FeeCalculator');  }}>
              <Text style={styles.dropdownItem}>Fee Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setDropdownVisible(false); navigation.navigate('Contact'); }}>
              <Text style={styles.dropdownItem}>Contact</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

        {/* Description */}
        <View style={styles.content}>
          <Text style={styles.title}>EMPOWERING THE NATION</Text>
          <Text style={styles.description}>
            is a South African training and development organization
            established in 2022, dedicated to uplifting and improving the lives of domestic workers, gardeners and other entry-level professionals. The organization focuses on providing practical marketable skills that promote personal growth, confidence and financial independence
          </Text>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <FontAwesome name="home" size={32} color="#222" style={styles.navIcon}  onPress={() => navigation.navigate('Home')} />
          <FontAwesome name="book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Courses')} />  
          <FontAwesome name="calculator" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('FeeCalculator')}  /> 
          <FontAwesome name="address-book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Contact')} />
        </View>
      </View>
  );
}
import type { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  CourseDetail: { course: string };
  FeeCalculator: undefined;
  Contact: undefined;
  
};


type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Courses'>;

function CoursesScreen({ navigation }: { navigation: CoursesScreenNavigationProp }) {
    return (
    <><ScrollView style={styles.fullScreenContainer}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./assets/EMP_LOGO.png')} />
          <Text style={styles.headerTitle}>EMPOWERING THE NATION</Text>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop:40 }}>
          <Text style={styles.coursesTitle}>COURSES</Text>
        </View>
        <View style={styles.coursesRow}>
          <View style={styles.coursesColumn}>
            <Text style={styles.coursesSubtitle}>Six - Months</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'First Aid' })}>
              <Text style={styles.coursesItem}>· First Aid</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Sewing' })}>
              <Text style={styles.coursesItem}>· Sewing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Landscaping' })}>
              <Text style={styles.coursesItem}>· Landscaping</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Life Skills' })}>
              <Text style={styles.coursesItem}>· Life Skills</Text>
            </TouchableOpacity>
            <Text style={styles.coursesPrice}>Each: R1500</Text>
          </View>
          <View style={styles.coursesColumn}>
            <Text style={styles.coursesSubtitle}>Six - Weeks</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Child Minding' })}>
              <Text style={styles.coursesItem}>· Child Minding</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Cooking' })}>
              <Text style={styles.coursesItem}>· Cooking</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: 'Garden Maintenance' })}>
              <Text style={styles.coursesItem}>· Garden Maintenance</Text>
            </TouchableOpacity>
            <Text style={styles.coursesPrice}>Each: R750</Text>
          </View>
        </View>
        <Text style={styles.coursesNote}>
          *Click one of the courses for more information
        </Text>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNavFixed}>
          <FontAwesome name="home" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Home')} />
          <FontAwesome name="book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Courses')} />
          <FontAwesome name="calculator" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('FeeCalculator')} />
          <FontAwesome name="address-book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Contact')} />

          </View>
        </>
    );
  
}
type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;
interface CourseDetailProps {
  route: CourseDetailRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'CourseDetail'>; 
}

const courseDetails: Record<string, { purpose: string; topics: string[]; fee: string }> = {
  "First Aid": {
    purpose: "To provide first Aid awareness and basic life support.",
    topics: [
      "Wounds and bleeding",
      "Burns and fractures",
      "Emergency Scene management",
      "Cardio-Pulmonary Resuscitation (CPR)",
      "Respiratory distress"
    ],
    fee: "R1500"
  },
  "Sewing": {
    purpose: "To provide alterations and new garments tailoring services",
    topics: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems, seams",
      "Alterations",
      "Designing and sewing new garments"
    ],
    fee: "R1500"
  },
  "Landscaping": {
    purpose: "To provide Landscaping services for new and established gardens",
    topics: [
      "Indigenous and exotic plants",
      "Garden design principles",
      "Soil preparation and composting",
      "Maintenance techniques",
      "Water-wise gardening"
    ],
    fee: "R1500"
  },
  "Life Skills": {
    purpose: "Skills to navigate basic life necessities",
    topics: [
      "Opening a bank account",
      "Basic Labour Law",
      "Basic reading and writing literacy",
      "Basic numeric literacy"
    ],
    fee: "R1500"
  },
  "Child Minding": {
    purpose: "To provide basic child and baby care",
    topics: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old baby needs",
      "Toddler needs",
      "Educational toys",
      
    ],
    fee: "R750"
  },
  "Cooking": {
    purpose: "To prepare and cook nutritious family meals",
    topics: [
      "Nutritional requirements for a healthy body", 
      "Types of protein carbohydrates and vegetables", 
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparations and cooking of meals",
    ],
    fee: "R750"
  },
  "Garden Maintenance": {
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden",
    topics: [
      "Water restrictions and watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types",
    ],
    fee: "R750"
  },
  };

type CoursesDetailNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetail'>;



function CourseDetailScreen({ route, navigation }: CourseDetailProps) {
  const { course } = route.params;
  const detail = courseDetails[course];

  if (!detail) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Course Not Found</Text>
        <Text style={styles.description}>We couldn't find details for "{course}".</Text>
      </View>
    );
  }

  return (
    <>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> {detail.purpose}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Fee:</Text> {detail.fee}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Topics Covered:</Text></Text>
      {detail.topics.map((topic, index) => (
        <Text key={index} style={styles.topicItem}>• {topic}</Text>
      ))}
    </ScrollView>
    
    
  
    <View style={styles.bottomNavFixed}>
        <FontAwesome name="home" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Home')} />
        <FontAwesome name="book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Courses')} />
        <FontAwesome name="calculator" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('FeeCalculator')} />
        <FontAwesome name="address-book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Contact')} />
      </View>
      </>
     );
    }
    
   
type FeeCalculatorProps = NativeStackNavigationProp<RootStackParamList, 'FeeCalculator'>;

function FeeCalculatorScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'FeeCalculator'> }) {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const courseFees: Record<string, number> = {
    "First Aid": 1500,
    "Sewing": 1500,
    "Landscaping": 1500,
    "Life Skills": 1500,
    "Child Minding": 750,
    "Cooking": 750,
    "Garden Maintenance": 750,
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const getDiscountRate = (count: number): number => {
    if (count === 2) return 0.05;
    if (count === 3) return 0.10;
    if (count > 3) return 0.15;
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, course) => sum + courseFees[course], 0);
    const discountRate = getDiscountRate(selectedCourses.length);
    const discountedSubtotal = subtotal * (1 - discountRate);
    const vat = discountedSubtotal * 0.15;
    const finalTotal = discountedSubtotal + vat;
    setTotalCost(finalTotal);
  };

  const handleGetInvoice = () => {
    if (!fullName || !phoneNumber || !email) {
      Alert.alert('Missing Information', 'Please enter your name, phone number, and email before generating an invoice.');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course.');
      return;
    }
    if (totalCost === null) {
      Alert.alert('Calculate Total First', 'Please calculate the total cost before generating your invoice.');
      return;
    }

    const discountRate = getDiscountRate(selectedCourses.length) * 100;
    const courseList = selectedCourses.join(', ');

    Alert.alert(
      'Invoice Details',
      `Full Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nCourses: ${courseList}\nDiscount: ${discountRate}%\nTotal (incl. VAT): R${totalCost.toFixed(2)}`
    );
  };


  
  return (
    <View style={styles.fullScreenContainer}>
    <ScrollView contentContainerStyle={{paddingHorizontal: 20, paddingBottom:120}}>
      <Text style={styles.title}>Fee Calculator</Text>
      <Text style={styles.description}>SELECT COURSES:</Text>
      <Text style={styles.description}> Please Fill Your Details</Text>

     <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

      {/* Courses List */}
      {Object.keys(courseFees).map(course => (
        <View key={course} style={styles.courseOption}>
          <CheckBox
            title={`${course} - R${courseFees[course]}`}
            checked={selectedCourses.includes(course)}
            onPress={() => toggleCourse(course)}
            />
        </View>
      ))}


      {/* Buttons */}
      <TouchableOpacity onPress={calculateTotal} style={styles.calculateButton}>
        <Text style={styles.buttonText}>Calculate Total Cost</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGetInvoice} style={[styles.calculateButton, { backgroundColor: '#2196F3' }]}>
          <Text style={styles.buttonText}>Get Invoice</Text>
        </TouchableOpacity>
      
      
      

      {totalCost !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.totalText}>Courses Selected: {selectedCourses.length}</Text>
          <Text style={styles.totalText}>Discount Applied: {getDiscountRate(selectedCourses.length) * 100}%</Text>
          <Text style={styles.totalText}>Total (incl. VAT): R{totalCost.toFixed(2)}</Text>
        </View>
      )}
     
    </ScrollView>
    {/* Bottom Navigation */}
      <View style={styles.bottomNavFixed}>
        <FontAwesome
          name="home"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Home')}
        />
        <FontAwesome
          name="book"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Courses')}
        />
        <FontAwesome
          name="calculator"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('FeeCalculator')}
        />
        <FontAwesome
          name="address-book"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    </View>
  );
}



type ContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contact'>;

const locations = [
  {
    title: 'Johannesburg CBD',
    address: '45 Commissioner St',
    latitude: -26.11,
    longitude: 28.058,
  },
  {
    title: 'Randburg',
    address: '12 Beyers Naudé Dr',
    latitude: -26.0941,
    longitude: 27.9985,
  },
  {
    title: 'Soweto',
    address: '88 Main Rd',
    latitude: -26.2678,
    longitude: 27.8585,
  },
];

// Helper function for opening  map links
const openMap = (latitude: number, longitude: number, label: string) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${encodeURIComponent(label)}`;
  Linking.openURL(url);
};


function ContactScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Contact'> }) {
  return (
  
    <View style={styles.fullScreenContainer}>
      
      
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}>
        
        <Text style={styles.title}>Contact Us</Text>

        <Text style={styles.header}>
          We'd love to hear from you! Please reach out to us through any of the following channels.
        </Text>

        
    

       
        <TouchableOpacity onPress={() => Linking.openURL('mailto:info@empoweringthenation.co.za')}>
             <Text style={styles.description}>
                <Text style={{ fontWeight: 'bold' }}>Email: </Text> info@empoweringthenation.co.za
             </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('tel:+27316794012')}>
             <Text style={styles.description}>
                <Text style={{ fontWeight: 'bold' }}>Phone: </Text> +27 31 679 4012
             </Text>
        </TouchableOpacity>
        
        <Text style={styles.description}>Locations:</Text>

        {Array.isArray(locations) && locations.map((loc, index) => (
          // Each location is a tappable item to open the map
          <TouchableOpacity 
              key={index} 
              onPress={() => openMap(loc.latitude, loc.longitude, loc.title)}
          >
           
            <Text style={styles.locationItem}>
               • {loc.title} – {loc.address}
            </Text>
          </TouchableOpacity>
        ))}

       
        <MapView
          style={{ width: '100%', height: 300, marginTop: 20, borderRadius: 10 }}
          initialRegion={{
            latitude: -26.2,
            longitude: 28.0,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          {locations.map((loc, index) => (
            <Marker
              key={`marker-${index}`} 
              coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
              title={loc.title}
              description={loc.address}
            />
          ))}
        </MapView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavFixed}>
        <FontAwesome
          name="home"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Home')}
        />
        <FontAwesome
          name="book"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Courses')}
        />
        <FontAwesome
          name="calculator"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('FeeCalculator')}
        />
        <FontAwesome
          name="address-book"
          size={32}
          color="#222"
          style={styles.navIcon}
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    </View>
  );
}


 







 
