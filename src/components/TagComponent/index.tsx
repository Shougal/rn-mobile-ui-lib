//
//  index.tsx
//  
//
//  Created by shoug alharbi on 6/26/25.
//

import {View, Text} from 'react-native'

import { styles } from "./style";
import { tagProps } from "./type";


export const TagComponent = (props: tagProps)=>{
    const variantStyle = styles[props.variant]
    const defaultBgColor = styles[props.variant].backgroundColor
    return(
        <View style={[variantStyle, {backgroundColor: props.color ?? defaultBgColor}]}>
            <Text style={variantStyle}>
                {props.label}
            </Text>
        </View>
    );

}