import React from "react";

import { Pressable , Text} from "react-native";
import { LinkProps } from "./types";
import { styles } from "./style";

export const Link = (props:LinkProps) => {

    return(
        <Pressable onPress={props.onPress}>
            <Text style={styles.default}>{props.linkLabel}</Text>
        </Pressable>
    );
}