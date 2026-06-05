import { ReactNode } from "react";
import {DataCard, DataCardContent, DataCardHeader} from "@/components/ui/DataCard";

interface TableProps {
    title: string;
    description?: string;
    tableHeaders: string[];
    children: ReactNode;
}

export default function CustomTable({ title, description, tableHeaders, children }: TableProps) {
    return (
        <DataCard>
            <DataCardHeader title={title} description={description}/>
            <DataCardContent>
                <table className="bg-base-100  table table-lg table-pin-rows">
                    <thead>
                    <tr className="hover:bg-base-200/80 transition-colors">
                        {tableHeaders.map(header => (
                            <th
                                key={header}
                                className={`font-semibold text-base-content/70 uppercase text-s tracking-wider ${
                                    header !== "Gegenstand" ? "text-center" : ""
                                }`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {children}
                    </tbody>
                </table>
            </DataCardContent>
        </DataCard>
    );
}