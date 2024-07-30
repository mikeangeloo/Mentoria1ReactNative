import React, {useContext, useEffect, useMemo, useState} from 'react';
import {UsersContext} from '../../contexts/users-context';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {usesListStyles} from './styles/user-styles';
import {useNavigation} from '@react-navigation/native';
import {formatURL} from '../utils/formatImgUrls';

type Loading = {
  isLoading: boolean;
};

const apiURL = 'https://6663665862966e20ef0c7f22.mockapi.io/api/v1';

export function UserList() {
  const {state, dispatch} = useContext(UsersContext);
  const {users} = state;
  const navigation = useNavigation();

  const [loading, setLoading] = useState<Loading>({
    isLoading: false,
  });

  // use memo
  const userCounter = useMemo(() => {
    return users?.length;
  }, [users]);

  useEffect(() => {
    if (users.length === 0) {
      setLoading({isLoading: true});
    }
    fetch(`${apiURL}/products`)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          dispatch({type: 'SET_USERS', payload: data});

          setLoading({isLoading: false});
        }, 1000);
      })
      .catch(error => {
        console.error('Error fetching data -->', error);
        setLoading({isLoading: false});
      });
  }, []);

  return (
    <View style={usesListStyles.container}>
      {loading.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={usesListStyles.header}>API Users</Text>
          <Text style={usesListStyles.subHeader}>
            Total users: {userCounter}
          </Text>
          <FlatList
            data={users}
            keyExtractor={item => item?.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('user-detail', {id: item.id})
                }>
                <View style={usesListStyles.userRow}>
                  <Text style={usesListStyles.userId}>{item.id}</Text>
                  <Text style={usesListStyles.userName}>{item.name}</Text>
                  <Image
                    style={usesListStyles.avatar}
                    source={{
                      uri: formatURL(item.avatar),
                    }}
                    alt="User Avatar"
                  />
                  <Text style={usesListStyles.createdAt}>
                    {new Date(item.createdAt).toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}
