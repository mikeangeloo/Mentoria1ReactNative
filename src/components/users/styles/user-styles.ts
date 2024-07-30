import {StyleSheet} from 'react-native';

export const usesListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userId: {
    width: 50,
    fontSize: 16,
  },
  userName: {
    width: 100,
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  createdAt: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export const userDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileCard: {
    width: 300,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'cornflowerblue',
  },
  date: {
    color: '#777',
    fontSize: 14,
  },
  description: {
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
  },
});
