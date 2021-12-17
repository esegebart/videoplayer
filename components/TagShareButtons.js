import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Tag from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-vector-icons/FontAwesome';

const TagShareButtons = () => {

    return (
        <View style={styles.tagShareContainer}>
            <TouchableOpacity style={styles.tagButtonContainer} onPress={console.log('do nothing')}>
                <Tag 
                  style={styles.tagButton}
                  name="tag" 
                  size={15}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButtonContainer} onPress={console.log('do nothing')}>
                <Share 
                  style={styles.shareButton}
                  name="share" 
                  size={15}
                />
            </TouchableOpacity>
        </View>
        );
    };

const styles = StyleSheet.create({
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
    borderRadius: 50,
    marginTop: 5
  },
  tagButton: {
    color: 'white',
  },
  shareButton: {
    color: 'white'
  },
});

export default TagShareButtons;