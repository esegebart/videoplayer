import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import TagShareButtons from './TagShareButtons';
import MediaControls from './MediaControls';

const OverlayExample = ({onPress}) => {

const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => {toggleOverlay()}} >
      <Overlay 
        style={styles.overlay}
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}} 
        fullScreen={true}
        isVisible={visible} 
        onBackdropPress={toggleOverlay}
        >
        <View style={styles.overlayView} onPress={() => {setVisible(false)}}>
        <TagShareButtons />
        <MediaControls />
        </View>
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
  },
  overlayView: {
    width: '100%',
    height: '100%',
  }
});

export default OverlayExample;