import { Input, InputProps } from './Input';
import { Meta, StoryObj } from "@storybook/react"
import { Envelope } from 'phosphor-react';
export default {
    title: "Components/Input",
    component: Input.Root,
    args: {
        children:(
            <>
            <Input.InputIcon>
            <Envelope/>
            </Input.InputIcon>
            <Input.InputText placeholder='digite o seu email'/>
            </>
        ),
    },
    argTypes: {
        asChild: {
            table:{
                disable: true,
            }
        }    
    }
} as Meta<InputProps>

export const Default: StoryObj = {}

