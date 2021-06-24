import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-300x300.png';

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"    
    />
  )

}