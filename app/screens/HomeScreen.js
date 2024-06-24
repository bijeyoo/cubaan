// App.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './CustomInput';
import ImageField from './ImageField';
import NavigationButton from './NavigationButton';
import ScrollBar from './ScrollBar';

const App = () => {
  const [form, setForm] = useState({ email: '', username: '', password: '' });

  const handleEmailChange = (email) => {
    setForm({ ...form, email });
  };

  const handleUsernameChange = (username) => {
    setForm({ ...form, username });
  };

  const handlePasswordChange = (password) => {
    setForm({ ...form, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollBar contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <ImageField
            source={require('../assets/logo-red.jpg')}
            style={styles.customImageStyle}
            containerStyle={styles.customContainerStyle}
          />
          <ImageField
            source={{ uri: 'https://static.wikia.nocookie.net/megamitensei/images/1/17/Gekkoukan_Emblem.png/revision/latest?cb=20150702014019' }}
            style={{ width: 100, height: 150 }}
          />
          <CustomInput
            label="Insert Email address"
            placeholder="izzhadif@example.com"
            keyboardType="email-address"
            value={form.email}
            onChangeText={handleEmailChange}
          />
          <CustomInput
            label="Insert Username"
            placeholder="Username"
            keyboardType="default"
            value={form.username}
            onChangeText={handleUsernameChange}
          />
          <CustomInput
            label="Insert Password"
            placeholder="Password"
            keyboardType="default"
            value={form.password}
            onChangeText={handlePasswordChange}
            isPassword={true}
          />
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>Campus System</Text>
          </Text>
          <NavigationButton screenName="Details" title="Go to Details Screen" />
        </View>
      </ScrollBar>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  customImageStyle: {
    width: 200,
    height: 200,
  },
  customContainerStyle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
