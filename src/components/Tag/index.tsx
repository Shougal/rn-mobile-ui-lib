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

    
    // They can change background color only if variant is default
    const bgColor = props.variant === 'default' && props.color ? props.color : defaultBgColor
    return(
        <View style={[variantStyle, {backgroundColor: bgColor}]}>
            <Text style={styles.text} >
                {props.label}
            </Text>
        </View>
    );

}