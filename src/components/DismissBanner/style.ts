import { StyleSheet } from "react-native";

import { cornerRadius, padding, gap } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    // TODO 1: Did not add height
    // since it should be based on content length

    // TODO 2: Should width be set here so it won't exceed parents width?
    // max width:'100%', - 16 padding of app view element
    width: "100%",

    // I like this because it accounts for views padding somehow?
    // maxWidth: '100%',
    // maxHeight: '100%',

    borderRadius: cornerRadius.m,

    // TODO 3: made padding 16 instead of 8
    padding: padding.m,

    gap: gap.s,

    // TODO 4: added flex direction row to account for the two main
    // containers within the banner
    flexDirection: "row",

    //TODO 4: check background color, put in theme
    backgroundColor: "#fff",

    // //TODO 5: should add overflow wrap to account for really long words:
    // flexWrap: 'wrap'
  },
  contentContainer: {
    // TODO 6: Does width actually work here when parent does not have
    // a fixed width size? should i flex here? max width worked better why?
    // width:'50%',
    // height:'auto',

    //Todo: how did flexShrink fix overflow issue even though parent has no fixed width
    // width is 50% of what?

    flexShrink: 1,
    //TODO 5: should add overflow wrap to account for really long words:
  },
});
