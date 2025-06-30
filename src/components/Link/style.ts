import { StyleSheet } from "react-native";

import { fontSize, fontFamily } from "../../styles/theme";


export const styles = StyleSheet.create({
    default:{
        fontFamily: fontFamily['default'],
        fontWeight:700,
        fontSize: fontSize['sm'],

        //Todo: line height,

        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: '#0071DA', 
        
        // no need for width right?
        // width:'100%',  
    }

});