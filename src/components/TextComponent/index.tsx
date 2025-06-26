

import { Text as RNText} from "react-native"

import {textProps} from './type'
export const Text = (props:textProps)=>{
    return(
        <RNText> {props.content}</RNText>

    );
    
}