import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

const OverlayExample = (props) => {

const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => {toggleOverlay()}}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});

export default OverlayExample;