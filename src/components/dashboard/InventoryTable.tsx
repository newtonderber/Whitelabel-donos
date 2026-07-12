import CustomTable from "@/components/ui/CustomTable";
import {prisma} from "@/lib/prisma";
import Link from "next/link";


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

async function getDonations(){
    return prisma.donation.findMany({
        include: {
            donatorContacts: true,
        },
        orderBy: {
            id: "desc",
        },
    });
}

export default async function InventoryTable() {
    const donations = await getDonations();

    return (
        <CustomTable
            title="Internes Helfer-Dashboard"
            tableHeaders={["Gegenstand", "Kategorie", "Menge", "Zustand", "Status", "Kontakt"]}
        >
            {donations.map(donation => (
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
                    <td className="text-center"><Link href={`/dashboard/contacts/${donation.donatorContactsId}`}>Anzeigen</Link></td>

                </tr>
            ))}
        </CustomTable>
    );
}