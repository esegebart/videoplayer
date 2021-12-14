import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import PauseButton from 'react-native-vector-icons/AntDesign';
import PlayButton from 'react-native-vector-icons/AntDesign';
import Tag from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-vector-icons/FontAwesome';

const OverlayExample = ({isPaused,onPress,onPause}) => {

//const videoPlayer = useRef(props.videoPlayer);
const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity style={styles.touchable} onPress={() => {toggleOverlay()}}>
      <View style={styles.tagShareContainer}>
        <TouchableOpacity style={styles.tagButtonContainer} onPress={console.log('do nothing')}>
          <Tag 
            style={styles.tagButton}
            name="tag" 
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButtonContainer} onPress={console.log('do nothing')}>
          <Share 
            style={styles.shareButton}
            name="share" 
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View>
          <TouchableOpacity onPress={onPress}>
            {isPaused ? (
              <PlayButton style={styles.playButton}
                name="play" 
                size={30}
                onPress={onPause} />
              ) : (
              <PauseButton style={styles.pauseButton}
                name="pause" 
                size={30}
                onPress={onPause}
              />
            )}
          </TouchableOpacity>
        </View>
      </Overlay>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  tagShareContainer: {
    position: 'absolute',
    right: 10,
    top: 15,
    justifyContent: 'space-between'
  },
  tagButtonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50
  },
  shareButtonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50
  },
  tagButton: {
    color: 'white',
  },
  shareButton: {
    color: 'white'
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  playButton: {
    color: 'rgba(0, 0, 0, 0.5)'
  },
  pauseButton: {
    color: 'black',
  },
});

export default OverlayExample;