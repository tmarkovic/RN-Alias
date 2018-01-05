import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends React.PureComponent {
  render() {
    const {onPress, title, color} = this.props;
    return (
      <TouchableOpacity style={{...styles.button, backgroundColor: color}} onPress = {onPress} >
        <View >
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
}
}

const styles = {
  button: {
    backgroundColor: '#F00',
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#222',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
}