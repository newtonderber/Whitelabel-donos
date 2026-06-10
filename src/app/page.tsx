import RequestTable from "@/components/RequestTable";
import PageContainer from "@/components/layout/PageContainer";

export default function Home() {

  return (
      <PageContainer>
          <div className={"ml-0"}>
              <h1 className="text-4xl md:text-4xl mt-12 font-medium tracking-tight">Hiermit kannst du uns grad helfen</h1>
          </div>

          <div className={"ml-0"}>
              <RequestTable>

              </RequestTable>
          </div>
      </PageContainer>
  );
}