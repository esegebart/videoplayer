import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import PauseButton from 'react-native-vector-icons/AntDesign';
import PlayButton from 'react-native-vector-icons/FontAwesome';

const MediaControls = ({isPaused,onPress,onPause}) => {

    return (
        <TouchableOpacity style={styles.playPauseContainer} onPress={onPress}>
            {isPaused ? (
                <PlayButton style={styles.playButton}
                name="play-circle" 
                size={25}
                onPress={onPause} />
                ) : (
                <PauseButton style={styles.pauseButton}
                name="pause" 
                size={25}
                onPress={onPause}
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  playPauseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    backgroundColor: 'white',
  },
  playButton: {
    color: 'rgba(0, 0, 0, 0.5)'
  },
  pauseButton: {
    color: 'black',
  },
});

export default MediaControls;