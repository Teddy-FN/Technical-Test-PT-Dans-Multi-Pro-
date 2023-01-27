import React, {useState} from 'react';

import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const _onLogin = () => {
    if (userName.length > 1 && password.length > 1) {
      props.navigation.navigate('Job List');
    }
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginBottom: 10,
          }}>
          UserName
        </Text>
        <TextInput
          mode={'outlined'}
          placeholder={'User Name'}
          value={userName}
          onChangeText={text => setUserName(text)}
          style={{width: '70%', marginBottom: 10}}
        />
        <Text
          style={{
            marginBottom: 10,
          }}>
          Password
        </Text>
        <TextInput
          mode={'outlined'}
          placeholder={'Password'}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={{width: '70%', marginBottom: 10}}
        />
        <Button
          title="Login"
          onPress={() => _onLogin()}
          disabled={userName.length < 1 && password.length < 1}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    padding: 10,
  },
});
