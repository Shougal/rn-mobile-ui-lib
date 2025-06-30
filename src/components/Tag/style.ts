//
//  style.ts
//  
//
//  Created by shoug alharbi on 6/26/25.
//

import { StyleSheet } from "react-native";
import { cornerRadius, gap, padding, fontFamily } from "../../styles/theme";

export const styles= StyleSheet.create({
    default: {

        // Fixed width for the tag
        width:81,

        // Fixed height for the tag, no need for min height
        height:25,

        borderRadius: cornerRadius['xs'],

        gap: gap['2xs'],

        paddingTop: padding['2xs'],
        paddingRight: padding['xs'],
        paddingBottom: padding['2xs'],
        //TODO: 2xs or xs?
        paddingLeft: padding['2xs'],
        
        backgroundColor: '#0071DA',  

    },
    offer: {
        //TODO: check offer bg color
        backgroundColor: '#D8BFD8',

        // Fixed width for the tag
        width:81,

        // Fixed height for the tag, no need for min height
        height:25,

        borderRadius: cornerRadius['xs'],

        gap: gap['2xs'],

        paddingTop: padding['2xs'],
        paddingRight: padding['xs'],
        paddingBottom: padding['2xs'],
        //TODO: 2xs or xs?
        paddingLeft: padding['2xs'],
      

        
    }, 

    text:{
        fontFamily: fontFamily['default'],
        textAlign:'center', 
        // TODO: check text color
        color:'#fff',
    },


    
});
