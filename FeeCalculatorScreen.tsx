import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from '../styles';


export default function FeeCalculatorScreen() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const courseFees: Record<string, number> = {
    "First Aid": 1500,
    "Sewing": 1500,
    "Landscaping": 1500,
    "Life Skills": 1500,
    "Child Minding": 1500,
    "Cooking": 750,
    "Garden Maintenance": 750,
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const getDiscountRate = (count: number) => {
    if (count >= 5) return 0.2;
    if (count >= 3) return 0.1;
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, course) => sum + courseFees[course], 0);
    const discount = subtotal * getDiscountRate(selectedCourses.length);
    const vat = (subtotal - discount) * 0.15;
    setTotalCost(subtotal - discount + vat);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fee Calculator</Text>
      <Text style={styles.description}>
        Select courses to calculate total cost (including 15% VAT and discounts):
      </Text>

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
    </ScrollView>
  );
}
