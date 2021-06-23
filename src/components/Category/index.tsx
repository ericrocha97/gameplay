import React from "react";
import { View } from "react-native";

import {styles} from './styles';

import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { LinearGradient, SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props){
  const { secondary50, secondary70 } = theme.colors;
  
  return(
    <RectButton {...rest}>
      <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >

    </LinearGradient>

    </RectButton>
      
  )
}