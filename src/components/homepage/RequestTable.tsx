"use client";

/*
TODO: fix async-hook conflict by dividing into server and client component
 */
import CustomTable from "@/components/ui/CustomTable";
import type { Priority, Category } from "@prisma/client";
import {useRef, useState} from "react";
import {submitDonation} from "@/actions/submitDonation";


/* --- Mapping of db enums to Strings --- */
const CATEGORY_LABELS: Record<string, string> = {
    KLEIDUNG: "Kleidung",
    LEBENSMITTEL: "Lebensmittel",
    ELEKTRONIK: "Elektronik",
};
const PRIORITY_LABELS: Record<string, string> = {
    NIEDRIG: 'Niedrig',
    MITTEL: 'Mittel',
    HOCH: 'Hoch',
    DRINGEND: 'Dringend',
};
const ACTIVE_MAP: Record<string, string> = {
    "true": "Ja",
    "false": "Nein",
};


/* --- Mock Data --- */
const MOCK_REQUESTS: { id: string, title: string, category: Category, priority: Priority, active: boolean }[] = [
    { id: "1", title: "Jeans", category: "KLEIDUNG", priority: "HOCH", active: true },
    { id: "2", title: "Jeans", category: "KLEIDUNG", priority: "HOCH", active: true }
];

/* --- Main Code --- */
type DonationTableProps = {
    editable?: boolean;
}

export default function RequestTable({ editable = false }: DonationTableProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <div>
            <CustomTable
                title={"Aktuell benötigen wir:"}
                tableHeaders={["Gegenstand", "Kategorie", "Priorität", "Aktuell"]}
            >
                {MOCK_REQUESTS.map(request => (
                    <tr key={request.id} className="hover:bg-base-200/70 transition-colors">
                        <td className="font-medium text-sm md:text-lg">{request.title}</td>
                        <td className="text-center">
                            <span className="badge badge-soft badge-sm md:badge-md ">{CATEGORY_LABELS[request.category] || request.category}</span>
                        </td>
                        <td className="text-center">
                            <span className="badge badge-soft badge-sm md:badge-md">{PRIORITY_LABELS[request.priority] || request.priority}</span>
                        </td>
                        <td className="text-center">
                            <span className="badge badge-soft badge-sm md:badge-md">{ACTIVE_MAP[String(request.active)] || String(request.active)}</span>
                        </td>
                        {editable && (
                            <td>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        dialogRef.current?.showModal();
                                    }}
                                >
                                    Bearbeiten
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
            </CustomTable>

            <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <form className={"md:grid grid-cols-2"} action={submitDonation}>
                        <div>
                            <h1 className="text-2xl  font-medium tracking-tight">Bedarf bearbeiten</h1>
                            <div className="mt-6 flex flex-col gap-3">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Gegenstand</legend>
                                    <input name="title" type="text" className="input" placeholder="z.B. Milch" />
                                    <p>Bitte für jeden verschiedenen Gegenstand einen separaten Bedarf erstellen.</p>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Kategorie</legend>
                                    <select name="category" className="select" defaultValue={""} required>
                                        <option value={""} disabled>Kategorie auswählen</option>
                                        <option value="KLEIDUNG">Kleidung</option>
                                        <option value="LEBENSMITTEL">Lebensmittel</option>
                                        <option value="ELEKTRONIK">Elektronik</option>
                                    </select>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Priorität</legend>
                                    <select name="condition" className="select">
                                        <option value={""} disabled>Zustand auswählen</option>
                                        <option value="NEU">Neu</option>
                                        <option value="GEBRAUCHT">Gebraucht</option>
                                    </select>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Aktuell</legend>
                                    <input name="amount" type="number" className="input" placeholder="3000" />
                                    <p>Mögliche Angaben sind die Anzahl oder das Gewicht in gramm</p>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => dialogRef.current?.close()}
                        >
                            Close
                        </button>
                    </div>
                </div>
                {/* DaisyUI-Backdrop: Close modal by clicking outside */}
                <div className="modal-backdrop bg-black/30" onClick={() => dialogRef.current?.close()}>
                    <button className="cursor-default">close</button>
                </div>
            </dialog>
        </div>
    );
}