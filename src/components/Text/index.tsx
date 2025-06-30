

import { Text as RNText} from "react-native"

import {textProps} from './type'
import { styles } from "./style";
export const Text = (props:textProps)=>{
    const styleText= styles.container
    return(
        <RNText  style={styleText}> {props.content}</RNText>

    );
    
}