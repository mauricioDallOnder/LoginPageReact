import "../styles/global.css"
import { Envelope, Airplane } from 'phosphor-react'
import { ReactNode } from 'react';
export function NavBar() {
    return (

        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-black text-white shadow">
            <SideBarIcon text="carta">
                <Envelope size="64" />
            </SideBarIcon>
            <SideBarIcon text="aviao">
                <Airplane size="64" />

                
            </SideBarIcon>
        </div>

    )
}

interface IIsideBar {
    text: string,
    children: ReactNode
}
const SideBarIcon = ({ text, children }: IIsideBar) => {
    return (
        <div className="sidebar-icon group">
            {children}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}