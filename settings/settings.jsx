import React, { useState } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(0);

  const handleSaveSettings = () => {
    // Add logic to save settings to your app's storage or backend
    console.log('Settings saved:', { name, username, email, darkMode, dailyGoal });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.mainContainer}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Choose a username"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Daily Goal</Text>
          <TextInput
            style={styles.input}
            value={dailyGoal.toString()}
            onChangeText={(value) => setDailyGoal(Number(value))}
            placeholder="Set your daily coding goal"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity onPress={handleSaveSettings} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 5,
  },
  header: {
    fontSize: 50,
    marginTop: 8,
    fontWeight: 'bold',
    //color: darkMode ? 'black' : 'white',
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 30,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    height: 40,
    width: '30%',
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fdcc04',
  },
  switchContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  switch: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  saveButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsPage;
