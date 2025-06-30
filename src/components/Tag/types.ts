//
//  type.ts
//  
//
//  Created by shoug alharbi on 6/26/25.
//
/**
 For all tag components the variant should be either default card or an offer
 Label is the content/text you want to add inside the component
 Color is optional. If not chosen, default style will be chosen
 */

export type VariantType= "default"|"offer"

 export interface TagProps {
    variant: VariantType
    label: string
    color?: string
}


