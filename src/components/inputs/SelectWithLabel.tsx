"use client"

import { useFormContext } from "react-hook-form"
import { FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputHTMLAttributes, use } from "react"
import { Select } from "@/components/ui/select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelectProps } from "@radix-ui/react-select"

type DataObj = {
    id: string,
    description: string,

}


type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S & string,
    data: DataObj[],
    className?: string,

}

export function SelectWithLabel<S>({fieldTitle,nameInSchema,data, className}:Props<S>) {
    const form = useFormContext()
    return (
        <FormField
        control={form.control}
        name={nameInSchema}
        render={({ field }) => ( 
            <FormItem> 
                <FormLabel className="text-base" htmlFor={nameInSchema}>
                    {fieldTitle}
                </FormLabel>
                <FormControl> 
                    <Select {...field}
                        onValueChange={field.onChange}
                    >
                        <SelectTrigger className={`w-full max-w-xs ${className}`}>
                            <SelectValue placeholder={fieldTitle} />
                        </SelectTrigger>
                        <SelectContent>
                            {data.map((item) => (
                                <SelectItem key={`${nameInSchema}-${item.id}`} value={item.id}>
                                    {item.description}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
            </FormItem> 
        )}
        />
    )

}