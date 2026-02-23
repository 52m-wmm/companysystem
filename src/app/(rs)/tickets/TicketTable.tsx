"use client";

import type { TicketSearchResultsType } from "@/lib/queries/getTicketSearchResults";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, 
    getPaginationRowModel, SortingState, getSortedRowModel } from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { CircleCheckIcon, CircleXIcon, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from "react";


type Props = {
    data: TicketSearchResultsType,
}

type RowType = TicketSearchResultsType[0]

export default function TicketTable({ data }: Props) { 
    const router = useRouter();
    const [sorting, setSorting ]= useState<SortingState>([
        {id: "ticketDate",
            desc: false,//false for ascending
        }
    ])
    const columnHeadersArray: Array<keyof RowType> = [
        "ticketDate",
        "title",
        "tech",
        "firstName",
        "lastName",
        "email",
        "completed",
    ];
    const columnHelper = createColumnHelper<RowType>();
    const columns = columnHeadersArray.map((columnName) => {
        return columnHelper.accessor((row) => { //transformational
            const value = row[columnName]
            if (columnName === "ticketDate" && value instanceof Date) {
                return value.toLocaleDateString('en-US',{
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
            }
            if (columnName === "completed") {
                return value 
                ? "COMPLETED" 
                : "OPEN"
            }
            return value
        },{
            id: columnName,
            header: ({column}) => {
                return (
                    <Button
                    variant="ghost"
                    className="pl-1 w-full flex justify-between"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                        {columnName[0].toUpperCase() + columnName.slice(1)}
                        {column.getIsSorted() === "asc" && (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        )}
                        {column.getIsSorted() == "desc" && (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                        {column.getIsSorted() !== "desc" && column.getIsSorted() !== "asc" && (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        )}
                        </Button>
                )
            },
            cell: ({ getValue }) => { //presentational
                const value = getValue();
                if (columnName === "completed") {
                    return (
                        <div className="grid place-content-center">
                            {value === "OPEN" ? <CircleXIcon className="opacity-25" /> 
                            : <CircleCheckIcon className="text-green-600"/>}
                        </div>
                    )
                }               
                return value
            }    
        })
    })
    
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 10
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    });
    return (
        <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg overflow-hidden border border-border">
            <Table className="border"> 
                <TableHeader> 
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                            <TableHead key={header.id} className="bg-secondary">
                                <div>
                                    {header.isPlaceholder 
                                    ? null 
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </div>
                            </TableHead>
                                )
                            )}      
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody> 
                        {table.getRowModel().rows.map((row) => (
                            <TableRow 
                            key={row.id}
                            className="cursor-pointer hover:bg-border/25 
                            dark:hover:bg-ring/40"
                            onClick={() => router.push(`/tickets/form?ticketId=${row.original.id}`)}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="border">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>

                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
            </div>
            <div className="flex justify-between items-center"> 
                <div className="flex basis-1/3 items-center">
                <p className="whitespace-nowrap font-bold">
                    {`Page ${table.getState().pagination.pageIndex + 1} 
                    of ${table.getPageCount()}`}
                    &nbsp;&nbsp;
                    {`[${table.getFilteredRowModel().rows.length} ${table.getFilteredRowModel().rows.length === 1 ? "row" : "rows"}]`}
                </p>
                </div>
                <div className="space-x-1">
                    <Button 
                    className="outline"
                    onClick={() => table.resetSorting()}
                    >
                        Rest Sorting
                    </Button>
                    <Button 
                    className="outline"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>

                    <Button 
                    className="outline"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>

                    </div>
            </div>
        </div>
    )
}
