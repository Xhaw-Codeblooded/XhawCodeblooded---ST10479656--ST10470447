import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10, // consistent horizontal padding
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#23405A',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  //  HomeScreen styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#23405A',
    flexShrink: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuText: {
    fontSize: 18,
    color: '#23405A',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 10,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#23405A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navIcon: {
    marginHorizontal: 10,
  },

  // CoursesScreen styles
  coursesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 20,
    textAlign: 'center',
  },
  coursesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  coursesColumn: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  coursesSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coursesItem: {
    fontSize: 16,
    marginBottom: 2,
  },
  coursesPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  coursesNote: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 100, // prevents bottom nav from overlapping content
  },

  //  CourseDetailScreen styles
  topicItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 6,
    color: '#444',
  },

  //  FeeCalculatorScreen styles
  courseOption: {
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },

  // ContactScreen styles
  locationItem: {
    fontSize: 16,
    color: '#007AFF', // clickable blue link
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  mapButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;

