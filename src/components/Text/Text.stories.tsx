import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react"
export default {
    title: "Components/Text",
    component: Text,
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
} as Meta<TextProps>

export const Default: StoryObj = {}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Heading com p</p>
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