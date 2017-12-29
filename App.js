import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <LinearGradient colors={['#C06C84','#F67280']}>
      
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}></Text>
          <Text style={styles.navBarHeader}>Alias</Text>
          <Text style={styles.navBarButton}></Text>
        </View>
        <View style={styles.content}>
        <Text style={styles.question}>Brandbil</Text>
        
          <ProgressCircle
            percent={85}
            radius={50}
            borderWidth={4}
            color="#F8B195"
            shadowColor="#6C567B"
            bgColor="#F67280"
          >
            <Text style={{ fontSize: 18, color: '#FFF' }}>{'0:05s'}</Text>
          </ProgressCircle>
        </View>
      </LinearGradient>
        
        <View style={styles.buttonContainer}>
          <Button style={styles.btn} title="Rätt" onPress={() => console.log('stuff')} color="#0F0" />
          <Button style={styles.btn} title="Pass" onPress={() => console.log('stuff')} color="#F00" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    flex:0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 64,
    backgroundColor: '#F67280'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 2,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#F67280'
  },
  question: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'Futura',
    fontWeight: '300',
    color: '#FFF'
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding:44,
    backgroundColor: '#6C567B',
    height: 40,
    width: 100
  }
});

