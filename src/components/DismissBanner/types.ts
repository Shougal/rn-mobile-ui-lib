
import { LinkProps } from "../Link/types";
import { TagProps } from "../Tag/types";
import { TextProps } from "../Text/types"

export interface DismissableProps extends LinkProps,
    TagProps, TextProps {
    onDismiss?: () => void
}