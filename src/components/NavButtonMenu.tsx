import type  { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"

type props = {
    icon: LucideIcon,
    Lable: string,
    chioce: {
        title: string,
        href: string,
    }[],
}
    
export function NavButtonMenu({ icon: Icon, Lable, chioce }: props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Icon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{Lable}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {chioce.map((choice) => (
                    <DropdownMenuItem key={choice.title} asChild>
                        <Link href={choice.href}>{choice.title}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}