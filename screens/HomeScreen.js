import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Icon } from 'expo';

import PageHeader from "../components/PageHeader";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
          <PageHeader height={300} colors={['#4A4969', '#7072AB', '#CD82A0']}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Salaams, Faizaan.</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')} style={{marginLeft: 'auto'}}>
                <Icon.Ionicons name='md-settings' style={styles.settingsIcon}></Icon.Ionicons>
              </TouchableHighlight>
            </View>
          </PageHeader>
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