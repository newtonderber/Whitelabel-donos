import RequestTable from "@/components/RequestTable";
import PageContainer from "@/components/layout/PageContainer";
import {HeaderCard} from "@/components/ui/HeaderCard";

export default function Home() {
  const initiativeName = process.env.NEXT_PUBLIC_INITIATIVE_NAME || "Standard Initiative";

  return (
      <PageContainer>
          <HeaderCard>
              <h1 className="text-4xl font-bold ">
                  {initiativeName}
              </h1>
          </HeaderCard>
          <div>
              <RequestTable>

              </RequestTable>
          </div>
      </PageContainer>
  );
}