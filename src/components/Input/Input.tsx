
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: ReactNode
    ref?: string
}

const TextInputRoot=({children}:InputProps)=>{
return(
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-grey-800 w-full focus-within:right-2 ring-cyan-300">
        {children}
    </div>
)
}

const InputIcon=({children}:InputProps)=>{
    return(
        <Slot className="y-6 h-6 text-grey-200">
            {children}
        </Slot>
    )
}

const TextInput=(props:InputProps)=>{
    return(
        <input className="bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none"
        {...props}
        />
    )
    }

export const Input ={
    Root: TextInputRoot,
    InputText: TextInput,
    InputIcon: InputIcon,
}