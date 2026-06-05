import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    size?: "narrow" | "default" | "wide";
}

export default function PageContainer({ children, size = "default" }: PageContainerProps) {
    const widthClass = {
        narrow: "max-w-2xl",   // Für Formulare (Spenden anbieten)[cite: 3, 4]
        default: "max-w-4xl",  // Für Standard-Listen (Bedarfsliste)[cite: 3, 4]
        wide: "max-w-7xl",     // Für das große Helfer-Dashboard[cite: 3, 4]
    }[size];

    return (
        <div className="min-h-screen bg-background text-base-content">
            <div className={`mx-auto px-4 py-8 w-full ${widthClass} flex flex-col gap-16`}>
                {children}
            </div>
        </div>
    );
}