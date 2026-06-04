import CustomTable from "@/components/CustomTable";

const CATEGORY_LABELS: Record<string, string> = {
    KLEIDUNG: "Kleidung",
    LEBENSMITTEL: "Lebensmittel",
    ELEKTRONIK: "Elektronik",
};
const CONDITION_LABELS: Record<string, string> = {
    NEU: "Neu",
    GEBRAUCHT: "Gebraucht",
};
const STAGE_LABELS: Record<string, string> = {
    ANGEBOTEN: "Angeboten",
    ANGENOMMEN_AUF_LAGER: "Auf Lager",
    RESERVIERT: "Reserviert",
    AUSGEGEBEN: "Ausgegeben",
};

const MOCK_DONATIONS = [
    { id: "1", title: "Winterjacke Gr. L", category: "KLEIDUNG", amount: 3, condition: "GEBRAUCHT", stage: "ANGENOMMEN_AUF_LAGER" },
    { id: "2", title: "Haltbare Milch", category: "LEBENSMITTEL", amount: 12, condition: "NEU", stage: "ANGEBOTEN" }
];

export default function InventoryTable() {
    return (
        <CustomTable
            title="Internes Helfer-Dashboard"
            headers={["Gegenstand", "Kategorie", "Menge", "Zustand", "Status"]}
        >
            {MOCK_DONATIONS.map(donation => (
                <tr key={donation.id} className="hover:bg-base-200/70 transition-colors">
                    <td className="font-semibold">{donation.title}</td>
                    <td className="text-center">
                        <span className="badge badge-soft">{CATEGORY_LABELS[donation.category] || donation.category}</span>
                    </td>
                    <td className="text-center">{donation.amount}</td>
                    <td className="text-center">
                        <span className="badge badge-md badge-soft">{CONDITION_LABELS[donation.condition] || donation.condition}</span>
                    </td>
                    <td className="text-center">
                        <span className="badge badge-md badge-soft">{STAGE_LABELS[donation.stage] || donation.stage}</span>
                    </td>
                </tr>
            ))}
        </CustomTable>
    );
}