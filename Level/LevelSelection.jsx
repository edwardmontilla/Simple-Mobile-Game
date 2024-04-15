import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LevelSelection = () => {
    const navigation = useNavigation();

    const handleLevelPress = (level) => {
      // Check if the clicked level is 1
      if (level === 1) {
        
        navigation.navigate('QAPage'); // Navigate to the QAPage screen 
      }
      
    };
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <Text style={styles.logo}>codinggo</Text>
      </View>
      <View style={styles.content}>
      </View>

      <View style={styles.section}>
        <View style={styles.flexContainer}>
          {[1, 2, 3, 4, 5].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.level,
                level === 1 && { backgroundColor: '#f2ab28' },
                level > 1 && styles.locked,
              ]}
              disabled={level === 1 ? false : true}
              onPress={() => handleLevelPress(level)}
            >
              <Text style={styles.levelText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77cff1',
  },

  // header, used z-index to make sure the header is on top of the content
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#1b1b1b',
    paddingHorizontal: 15,
    position: 'relative',
    zIndex: 1,
  },

  // bg behind codinggo logo
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: -1,
  },

  // Codinggo logo
  logo: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 5,
    fontSize: 25,
    fontWeight: '700',
  },

// section for the boxes
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77cff1',
  },

  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    flexWrap: 'wrap',
  },

  // box size
  level: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    margin: '2%',
  },

   // locked levels
  locked: {
    opacity: 0.7,
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    marginLeft: 9,
  },

  // numbers in the boxes
  levelText: {
    color: 'white',
    fontSize: 35,
  },
});

export default LevelSelection;
