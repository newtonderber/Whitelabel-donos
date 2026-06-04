import { ReactNode } from "react";

interface TableProps {
    title?: string;
    headers: string[];
    children: ReactNode;
}

export default function CustomTable({ title, headers, children }: TableProps) {
    return (
        <div className="w-full rounded-2xl p-2 shadow-md bg-base-200/80">
            {title && (
                <h1 className="text-2xl font-bold text-base-content mb-6">
                    {title}
                </h1>
            )}

            <div className="overflow-x-auto w-full rounded-xl">
                <table className="bg-base-100  table table-lg table-pin-rows">
                    <thead>
                    <tr className="hover:bg-base-200/80 transition-colors">
                        {headers.map(header => (
                            <th
                                key={header}
                                className={`font-semibold text-base-content/70 uppercase text-s tracking-wider ${
                                    header === "Kategorie" || header === "Zustand" || header === "Status" ? "text-center" : ""
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
            </div>
        </div>
    );
}