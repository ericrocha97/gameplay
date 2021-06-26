import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
  isDetails?: boolean;
}

export function ListDivider({ isCentered, isDetails }: Props){
  return (
    <View 
      style={[
        styles.container,
        isCentered ? {
          marginVertical: 12,
          width: '75%'
        } : {
          marginTop: 2,
          marginBottom: 31,
          width: '78%',
        },
        isDetails ? {
          width: '83%',
        } : {

        }
      ]}
    />
  );
}