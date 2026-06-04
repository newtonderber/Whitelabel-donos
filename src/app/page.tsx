import InventoryTable from "@/components/InventoryTable";

export default function Home() {
  const initiativeName = process.env.NEXT_PUBLIC_INITIATIVE_NAME || "Standard Initiative";

  return (
      <main className="p-4 max-w-6xl mx-auto">
          <InventoryTable />
      </main>
  );
}