import { View } from "react-native";

import { dismissableProps } from "./type";
import { TagComponent } from "../TagComponent";
import { Text } from "../TextComponent";
import { Link } from "../LinkComponent";
import { styles } from "./style";

export const DismissableComponent = (props: dismissableProps)=>{
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TagComponent variant={props.variant} label={props.label}/>
                <Text content={props.content}/>
                <Link url={props.url} linkLabel={props.linkLabel} onPress={props.onPress}/>
            </View>

            <View style={styles.contentContainer}>
                <Text content="Hey this is the other container" />
            </View>
            
        </View>
    );
}