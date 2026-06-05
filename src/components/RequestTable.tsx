import CustomTable from "@/components/CustomTable";
import {Priority, Category} from "@prisma/client";

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
}
const ACTIVE_MAP: Record<string, string> = {
    "true": "Ja",
    "false": "Nein",
};

const MOCK_REQUESTS:{id:string, title:string, category:Category, priority:Priority, active:boolean}[] = [
    {id:"1", title:"Jeans", category:"KLEIDUNG", priority:"HOCH", active:true},
    {id:"2", title:"Jeans", category:"KLEIDUNG", priority:"HOCH", active:true}
];


export default function RequestTable() {
    return (
        <CustomTable
        title={"Aktuell benötigen wir:"}
        tableHeaders={["Gegenstand", "Kategorie", "Priorität", "Aktuell"]}>
            {MOCK_REQUESTS.map(request => (
              <tr key={request.id} className="hover:bg-base-200/70 transition-colors">
                    <td className="font-semibold">{request.title}</td>
                    <td className="text-center">
                        <span className="badge badge-soft">{CATEGORY_LABELS[request.category] || request.category}</span>
                    </td>
                    <td className="text-center">
                        <span className="badge badge-md badge-soft">{PRIORITY_LABELS[request.priority] || request.priority}</span>
                    </td>
                    <td className="text-center">
                        <span className="badge badge-md badge-soft">{ACTIVE_MAP[String(request.active)] || String(request.active)}</span>
                    </td>
                </tr>
            ))}
        </CustomTable>);
}