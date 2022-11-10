import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    color?: 'black'| 'grey' | "cyan"
    asChild?:boolean;
    className?: string
    
}

export function Text ({size='md',color,asChild,children,className}:TextProps) {
    const Comp= asChild? Slot: 'p';
    return(
        <Comp className={clsx("text-grey-100",
        {
            "text-lg": size ==='sm',
            "text-xl": size ==='md',
            "text-2xl": size === 'lg',
            "text-black": color ==='black',
            "text-grey-400": color ==='grey',
            "text-cyan-500": color === 'cyan'
        },
       className
        
        )}>
            {children}
            </Comp>
    )
}