import "../../styles/global.css"
import { LogoIcon } from "../../components/Logo/Logo"
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { Input } from "../../components/Input/Input";
import { Envelope,Lock } from 'phosphor-react';
import { CheckBoxes } from "../../components/CheckBox/CheckBox";
import { Button } from "../../components/Button/Button";
export const PesquisaCPF = () => {
    return (

        <div className="w-screen h-screen bg-grey-900 flex flex-col itens center justify-center text-cyan-500">
            <header className="flex flex-col items-center">
                <LogoIcon />
                <Heading size="lg" className="mt-4 text-cyan-500">
                    Pesquisa CPF
                </Heading>
                <Text size="lg" className="mt-1 text-grey-400">
                    Faça Digite o cpf e faça sua pesquisa
                </Text>

                <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-18" >
                    <label htmlFor="email" className="font-semibold flex flex-col gap-3">
                        <Text>
                            cpf
                            <Input.Root>
                                <Input.InputIcon>
                                    <Envelope />
                                </Input.InputIcon>
                                <Input.InputText placeholder='digite o seu email' />
                            </Input.Root>
                        </Text>
                    </label>
                    
                    <Button type="submit" className="mt-4">Clique aqui para pesquisar</Button>
                </form>
               
            </header>
        </div>

    )
}