import { StyleSheet } from "react-native";

import { fontSize } from "../../styles/theme";


export const styles = StyleSheet.create({
    default:{
        fontFamily: 'Inconsolata',
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