import { CheckBoxProps, CheckBoxes } from "./CheckBox";
import { Meta, StoryObj } from "@storybook/react"
import { Text } from '../Text/Text';
export default {
    title: "Components/CheckBox",
    component: CheckBoxes,
    args: {},
    argTypes: {
    },
    decorators:[
        (Story)=>{
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">esse é um texto de teste</Text>
                </div>
            )
        }
    ]
} as Meta<CheckBoxProps>

export const Default: StoryObj = {}

