
import { LinkProps } from "../Link/types";
import { TagProps } from "../Tag/types";
import { TextProps } from "../Text/types"

export interface DismissableProps  {
    // link props
    linkLabel: LinkProps["linkLabel"],
    onPress : LinkProps["onPress"],

    // tag props
    tagVariant: TagProps['variant'],
    tagLabel: TagProps['label'],
    tagColor?: TagProps['color'],

    // text props
    textContent: TextProps['content'],

}
