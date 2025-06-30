import React from 'react'
import { View, } from "react-native";

import { DismissableProps } from "./types";
import { TagComponent } from "../Tag";
import { Text } from "../Text";
import { Link } from "../Link";
import { styles } from "./style";

export const DismissBanner = (props: DismissableProps) => {

    return (
        <View style={styles.container} >
            <View style={styles.contentContainer}>
                <TagComponent variant={props.tagVariant} label={props.tagLabel} />
                <Text content={props.textContent} />
                <Link linkLabel={props.linkLabel} onPress={props.onPress} />
            </View>

            <View style={styles.contentContainer}>
                <Text content="Hey this is the other container. i want to make it long enough to check the width. Hopefully, it works!" />
            </View>

        </View>
    );
};