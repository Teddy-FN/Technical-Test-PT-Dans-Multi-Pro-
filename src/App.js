import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import List from './pages/List';
import Detail from './pages/Detail';
import Login from './pages/Login';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import dataListReducer from './redux/reducer/dataListReducer';
import dataByIdReducer from './redux/reducer/dataByIdReducer';

const Stack = createNativeStackNavigator();
const reducer = combineReducers({
  dataListReducer: dataListReducer,
  dataByIdReducer: dataByIdReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Job List" component={List} />
            <Stack.Screen name="Job Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
