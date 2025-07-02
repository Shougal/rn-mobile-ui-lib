import { Text as RNText } from "react-native";

import { TextProps } from "./types";
import { styles } from "./style";

export const Text = (props: TextProps) => {
  const styleText = styles.container;
  return <RNText style={styleText}> {props.content}</RNText>;
};
