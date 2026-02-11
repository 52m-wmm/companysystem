import { getCustomer } from "@/lib/queries/getCustomer";
import  { BackButton } from "@/components/BackButton";
import { CustomerForm } from "./CustomerForm";
import { CustomErrorParams } from "zod/v3";
export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    try {
        const { customerId } = await searchParams
        //Edit customers form
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId))

            if(!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default"/>
                    </>
                )

            }
            console.log(customer)
            //put customer form component
            return <CustomerForm customer={customer}/>
        } else {
            //new customer form component
            return <CustomerForm/>
        }


    }catch (e) {
        if (e instanceof Error) {//检查捕获到的对象是否真的是一个错误对象
            throw e
        }
    }
}


