import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
  width: string; 
}

export function ListDivider({ isCentered, width }: Props){
  return (
    <View 
      style={[
        styles.container,
        isCentered ? {
          marginVertical: 14,
        } : {
          marginTop: 2,
          marginBottom: 31,
        },{
          width
        }
      ]}
    />
  );
}