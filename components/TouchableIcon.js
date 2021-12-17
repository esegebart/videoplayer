import React from 'react';
import { TouchableOpacity } from 'react-native';

const TouchableIcon = ({ name, children }) => {
  return (
    <TouchableOpacity style={styles.touchIcon}>
      <Icon name={name} size={30} color="#767577" />
      <Text style={styles.iconText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;