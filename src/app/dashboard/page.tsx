

import InventoryTable from "@/components/dashboard/InventoryTable";
import PageContainer from "@/components/layout/PageContainer";
import RequestTable from "@/components/homepage/RequestTable";

export default function Dashboard() {
    return (
        <PageContainer>
            <h1 className="text-4xl md:text-4xl mt-12 font-medium tracking-tight">Spendenübersicht</h1>
            <InventoryTable/>

            <div className={"flex justify-between items-center"}>
                <h1 className="text-4xl md:text-4xl mt-12 font-medium tracking-tight">Bedarfsübersicht</h1>
            </div>

            <RequestTable editable={true}/>
        </PageContainer>

    );
}