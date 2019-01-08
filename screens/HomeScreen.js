import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'expo';

import PageHeader from "../components/common/PageHeader";
import IconButton from '../components/common/IconButton';
import VerseDay from '../components/home/VerseDay';
import DailyRecitation from '../components/home/DailyRecitation';
import UntilNextAdhan from '../components/home/UntilNextAdhan';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.wrapper}>
          <PageHeader height={275} colors={['#4A4969', '#7072AB', '#CD82A0']}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Salaams, Faizaan.</Text>
              <IconButton onPress={() => this.props.navigation.navigate('Settings')} style={{marginLeft: 'auto'}}>
                <Icon.Ionicons name='md-settings' style={styles.settingsIcon}></Icon.Ionicons>
              </IconButton>
            </View>
            <UntilNextAdhan/>
          </PageHeader>
          <ScrollView style={styles.content}>
            <VerseDay/>
            <DailyRecitation/>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  content: {
    marginTop: 10,
  },
  header: {
    paddingTop: 60,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'nunito',
    color: '#fff',
    justifyContent: 'flex-start'
  },
  settingsIcon: {
    marginLeft: 'auto',
    fontSize: 20,
    color: '#fff',
  }
});
