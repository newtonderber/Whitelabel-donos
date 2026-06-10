import { ReactNode } from "react";

export function HeaderCard({ children }: { children: ReactNode }) {
    return (
        <div className="bg-base-100 border border-base-300 rounded-box shadow-sm overflow-hidden text-center p-8">
            {children}
        </div>
    );
}