import { StyleSheet } from "react-native";

import { fontSize } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        //todo: do we set width in here? and why? should it be set because it should not
        // exceed its parent width?
        // width:'100%',

        fontFamily: 'Inconsolata',
        fontWeight: 400,
        fontSize: fontSize['sm'],
        color: '#181B1E',
        //TODO: line height is not working
        // lineHeight: 1.4, 
    }
})