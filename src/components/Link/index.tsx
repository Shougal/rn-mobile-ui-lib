import { Pressable , Text, Linking} from "react-native";
import { linkProps } from "./type";
import { styles } from "./style";

export const Link = (props:linkProps) => {

    return(
        <Pressable onPress={props.onPress}>
            <Text style={styles.default}>{props.linkLabel}</Text>
        </Pressable>
    );
}