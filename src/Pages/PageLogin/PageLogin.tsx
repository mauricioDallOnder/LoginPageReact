import "../../styles/global.css"
import { LogoIcon } from "../../components/Logo/Logo"
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Input } from "../../components/Input/Input";
import { Envelope,Lock } from 'phosphor-react';
import { CheckBoxes } from "../../components/CheckBox/CheckBox";
import { Button } from "../../components/Button/Button";
export const Login = () => {
    return (

        <div className="w-screen h-screen bg-grey-900 flex flex-col itens center justify-center text-cyan-500">
            <header className="flex flex-col items-center">
                <LogoIcon />
                
                

                <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-18" >
                    <label htmlFor="email" className="font-semibold flex flex-col gap-3">
                        <Text>
                            E-mail
                            <Input.Root>
                                <Input.InputIcon>
                                    <Envelope />
                                </Input.InputIcon>
                                <Input.InputText placeholder='type your email' />
                            </Input.Root>
                        </Text>
                    </label>
                    <label htmlFor="senha" className="font-semibold flex flex-col gap-3">
                        <Text>
                            Password
                            <Input.Root>
                                <Input.InputIcon>
                                    <Lock />
                                </Input.InputIcon>
                                <Input.InputText type="password" placeholder='type your password' />
                            </Input.Root>
                        </Text>
                    </label>
                    <label htmlFor="check" className="flex items-center gap-2">
                        <CheckBoxes/>
                            <Text size="sm" className="text-grey-200">
                            Remember my password
                            </Text>
                    </label>
                    <Button type="submit" className="mt-4">Login to the platform</Button>
                </form>
                <footer className="flex flex-col items-center gap-4 mt-8">
                    <a href="" className="text-grey-400 underline">Forgot your password?</a>
                    <a href="" className="text-grey-400 underline">Don't have an account? Create one now</a>
                </footer>
            </header>
        </div>

    )
}