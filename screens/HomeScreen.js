import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Icon } from 'expo';

import { MonoText } from '../components/StyledText';
import TabBarIcon from '../components/TabBarIcon';
import SlantedHeader from '../components/SlantedHeader';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
          <SlantedHeader height={300}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Salaams, Faizaan.</Text>
              <Icon.Ionicons name='md-settings' style={styles.settingsIcon}></Icon.Ionicons>
            </View>
          </SlantedHeader>
          <ScrollView style={styles.content}>
            <Text>Here's some test content.</Text>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 10
  },
  header: {
    paddingTop: 60,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    justifyContent: 'flex-start'
  },
  settingsIcon: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#fff',
  }
});
