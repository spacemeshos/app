import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>

      <Text
        onPress={onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}