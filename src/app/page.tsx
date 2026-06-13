import RequestTable from "@/components/RequestTable";
import PageContainer from "@/components/layout/PageContainer";
import DonationForm from "@/components/DonationForm";

export default function Home() {

  return (
      <PageContainer>
          <div>
              <h1 className="text-4xl md:text-4xl mt-12 font-medium tracking-tight">Hiermit kannst du uns aktuell helfen</h1>
          </div>
          <div>
              <RequestTable></RequestTable>
          </div>
          <div>
              <div>
                  <h2 className="text-3xl mt-12 font-medium tracking-tight">Du möchtest etwas beisteuern?</h2>
              </div>
              <div>
                  <p className="text-xl mt-8 font-medium text-base-content/90 tracking-tight">Gerne kannst du uns mit dem folgenden Formular mitteilen, mit was du helfen möchtest.
                  Trage einfach die Informationen zu deinem Gegenstand und deinen Kontaktdaten ein und wir melden uns bei dir.</p>
                  <p className="text-xl mt-4 font-medium text-base-content/90 tracking-tight">Vielen Dank!</p>

              </div>
              <div className="mt-10">
                  <DonationForm></DonationForm>
              </div>

          </div>


      </PageContainer>
  );
}