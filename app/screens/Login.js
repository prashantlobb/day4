import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../common';
import Store from '../store/Store';
import { observer } from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const {login} = Store;
  const navigation = useNavigation();
  const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your email id"
        value={email}
        placeholderTextColor={COLORS.gray}
        onChangeText={setEmail}
      />
      <Button
        title="Login"
        onPress={() => {
          if (emailRegex.test(email)){
             login(email)
             navigation.navigate('Home')
             setEmail('')
             
            }
          else console.warn('Please enter correct email id');
        }}
      />
    </View>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    color: COLORS.black,
  },
});
