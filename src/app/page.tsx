export default function Home() {
  const initiativeName = process.env.NEXT_PUBLIC_INITIATIVE_NAME || "Standard Initiative";

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
        <div className="p-6 bg-white rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-bold text-emerald-600 mb-2">
            {initiativeName}
          </h1>
          <p className="text-gray-600">
            Willkommen auf der Whitelabel-Spendenplattform.
          </p>
        </div>
      </main>
  );
}