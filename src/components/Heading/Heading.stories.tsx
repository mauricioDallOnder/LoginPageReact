import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react"
export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children:'lore ipsum',
        size:'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            },
            color: {
                options: ['black', 'grey', 'cyan'],
                control: {
                    type: 'inline-radio',
                }
            },
            
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj = {}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading com h1</h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild: {
            table:{
                disable: true,
            }
        }    
    }
}