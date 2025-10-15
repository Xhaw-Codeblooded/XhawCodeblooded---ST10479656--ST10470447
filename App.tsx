import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet,Linking, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import  { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-elements';
import styles  from './styles';
import BottomNav from './BottomNav'









const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="FeeCalculator" component={FeeCalculatorScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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

type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  CourseDetail: { course: string };
  FeeCalculator: undefined;
  Contact: undefined;
  
};


type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Courses'>;

function CoursesScreen({ navigation }: { navigation: CoursesScreenNavigationProp }) {
    return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/EMP_LOGO.png')}
        />
        <Text style={styles.headerTitle}>EMPOWERING THE NATION</Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
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
      {/* Bottom Navigation - OUTSIDE the ScrollView */}
      <View style={styles.bottomNav}>
        <FontAwesome name="home" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Home')} />
        <FontAwesome name="book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Courses')} />
        <FontAwesome name="calculator" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('FeeCalculator')} />
        <FontAwesome name="address-book" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.navigate('Contact')} />
        <FontAwesome name="arrow-circle-left" size={32} color="#222" style={styles.navIcon} onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
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

function CourseDetailScreen({ route }: { route: { params: { course: string } } }) {
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Purpose:</Text> {detail.purpose}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Fee:</Text> {detail.fee}</Text>
      <Text style={styles.description}><Text style={{ fontWeight: 'bold' }}>Topics Covered:</Text></Text>
      {detail.topics.map((topic, index) => (
        <Text key={index} style={styles.topicItem}>• {topic}</Text>
      ))}
    </ScrollView>
  );
}
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FeeCalculator'>;
};


function FeeCalculatorScreen() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number | null>(null);

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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fee Calculator</Text>
      <Text style={styles.description}>Select courses to calculate total cost (including 15% VAT and discounts):</Text>

      {Object.keys(courseFees).map(course => (
        <View key={course} style={styles.courseOption}>
          <CheckBox
            title={`${course} - R${courseFees[course]}`}
            checked={selectedCourses.includes(course)}
            onPress={() => toggleCourse(course)}
          />
        </View>
      ))}

      <TouchableOpacity onPress={calculateTotal} style={styles.calculateButton}>
        <Text style={styles.buttonText}>Calculate Total Cost</Text>
      </TouchableOpacity>

      {totalCost !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.totalText}>Courses Selected: {selectedCourses.length}</Text>
          <Text style={styles.totalText}>Discount Applied: {getDiscountRate(selectedCourses.length) * 100}%</Text>
          <Text style={styles.totalText}>Total (incl. VAT): R{totalCost.toFixed(2)}</Text>
        </View>
      )}
      <BottomNav />
    </ScrollView>
  );
}
 

function ContactScreen() {
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




 
