import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PageHeader from '../../components/common/PageHeader';

/*
This page will include links to du'as, a'amaals, and salaats along with interactives.
TODO Debating whether to put Qur'an within here... idk
*/
export default class RecitationsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <PageHeader height={200} colors={['#9B51E0', '#BB6BD9']}>
          <View style={styles.header}>
            <Text>Recitations page.</Text>
          </View>
        </PageHeader>
        <ScrollView style={styles.content}>
          <Text>This is a dummy page, awaiting real contents.</Text>
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
  }
});
