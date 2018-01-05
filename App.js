import React from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import CustomButton from './components/UI/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Text style={styles.navBarButton}></Text>
          <Text style={styles.navBarHeader}>Alias</Text>
          <Text style={styles.navBarButton}></Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.question}>Brandbil</Text>
          <View style={styles.status}>
            <Text style={{fontSize: 18, color: '#FFF', width: 70, fontFamily: 'Futura'}}>{'Rätt: 10'}</Text>
            <ProgressCircle
              percent={85}
              radius={60}
              borderWidth={6}
              color="#2ecc71"
              shadowColor="#6C567B"
              bgColor={mainColor}
            >
              <Text style={{fontSize: 24, color: '#FFF', fontFamily: 'Futura'}}>{'0:05s'}</Text>
            </ProgressCircle>
            <Text style={{fontSize: 18, color: '#FFF', width: 70, textAlign: 'right', fontFamily: 'Futura'}}>{'Pass: 5'}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Rätt" color='#2ecc71' onPress={() => console.log('lol')} />
          <CustomButton title="Pass" color='#e74c3c' onPress={() => console.log('lol')} />
        </View>
      </View>
    );
  }
}

const mainColor = '#6a3fb7';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  navBar: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 64,
    backgroundColor: mainColor
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
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: mainColor,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    
  },
  question: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'Futura',
    fontWeight: '300',
    color: '#FFF'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    padding: 44,
    backgroundColor: '#6C567B',
    height: 40,
    width: 100
  },
  status: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

