
import { linkProps } from "../LinkComponent/type";
import { tagProps} from "../TagComponent/type";
import {textProps} from "../TextComponent/type"

export interface dismissableProps extends linkProps, 
tagProps,textProps{
    onDismiss?: ()=> void
}