import {clsx} from "clsx"
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
export interface CheckBoxProps{
}

export function CheckBoxes ({}:CheckBoxProps) {
    
    return(
        <Checkbox.Root className="h-6 w-6 p-[2px] bg-grey-800 rounded">
        <Checkbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"/>
        </Checkbox.Indicator>
      </Checkbox.Root>
    
    )
}