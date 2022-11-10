import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    color?: 'black'| 'grey' | "cyan"
    asChild?:boolean;
    className?: string
}

export function Heading ({size='md',color,asChild,children,className}:HeadingProps) {
    const Comp= asChild? Slot: 'h2';
    return(
        <Comp className={clsx("text-black font-bold",
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