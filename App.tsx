import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserList} from './src/components/users/user-list';
import {enableScreens} from 'react-native-screens';
import {UsersProvider} from './src/contexts/users-context';
import {UserDetail} from './src/components/users/user-detail';

const Stack = createNativeStackNavigator();
enableScreens(true);

function App(): React.JSX.Element {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="users">
          <Stack.Screen
            name="users"
            component={UserList}
            options={{title: 'Users List'}}
          />
          <Stack.Screen
            name="user-detail"
            component={UserDetail}
            options={{title: 'User Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

export default App;
