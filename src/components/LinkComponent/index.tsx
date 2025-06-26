import { Pressable , Text, Linking} from "react-native";
import { linkProps } from "./type";
import { styles } from "./style";

export const Link = (props:linkProps) => {
    const handlePress = ()=>{
        props.onPress(props.url)
    }
    const styleDefault = styles.default
    return(
        <Pressable onPress={handlePress}>
            <Text style={styleDefault}>{props.linkLabel}</Text>
        </Pressable>
    );
}