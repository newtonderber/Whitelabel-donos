import { ReactNode } from "react";

// 1. Der äußere Rahmen (Zwingt das Feature in den modernen Card-Look)
export function DataCard({ children }: { children: ReactNode }) {
    return (
        <div className="bg-base-100 border border-base-300 rounded-box shadow-sm overflow-hidden">
            {children}
        </div>
    );
}

// 2. Der Header für die Card
interface DataCardHeaderProps {
    title: string;
    description?: string;
}
export function DataCardHeader({ title, description }: { title: string; description?: string }) {
    return (
        <div className="p-6 border-b border-base-300 bg-base-200/30">
            <h3 className="text-lg font-bold tracking-tight">{title}</h3>
            {description && <p className="text-sm text-base-content/60 mt-1">{description}</p>}
        </div>
    );
}

// 3. Der Content-Bereich (egal ob Tabelle, Formular oder Liste)
export function DataCardContent({ children, noPadding = false }: { children: ReactNode; noPadding?: boolean }) {
    return (
        <div className={noPadding ? "" : "p-6"}>
            {children}
        </div>
    );
}