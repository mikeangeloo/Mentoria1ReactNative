import React, {useContext} from 'react';
import {UsersContext} from '../../contexts/users-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Image, Text, View} from 'react-native';
import {userDetailStyles} from './styles/user-styles.ts';

export function UserDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params ?? {};
  const {state} = useContext(UsersContext);
  const user = state.users.find(user => user.id === (id ?? '0'));

  if (!user) {
    return (
      <View style={userDetailStyles.container}>
        <Text>User not found</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  return (
    <View style={userDetailStyles.container}>
      <View style={userDetailStyles.profileCard}>
        <Image source={{uri: user.avatar}} style={userDetailStyles.avatar} />
        <Text style={userDetailStyles.name}>{user.name}</Text>
        <Text style={userDetailStyles.date}>
          Joined: {new Date(user.createdAt).toDateString()}
        </Text>
        <Text style={userDetailStyles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nisi
          est omnis tenetur consequuntur adipisci ea nesciunt, maxime itaque
          fugit labore repellat quasi officiis doloribus. Incidunt numquam eos
          ullam pariatur?
        </Text>
      </View>
      <View style={userDetailStyles.backButton}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
