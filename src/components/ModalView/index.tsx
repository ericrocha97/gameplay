import React, { ReactNode } from 'react';

import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';

import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  setState: () => void;
}

export function ModalView({children, setState  ,...rest}: Props){
  return (
    <Modal
      statusBarTranslucent
      
      transparent
      animationType='slide'
      {...rest}
    >
      <TouchableWithoutFeedback style={{flex: 1}} onPress={setState}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar}/>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}