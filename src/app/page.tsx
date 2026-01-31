import DrillingCanvas from "./components/SpinningDrill";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to URB</h1>
      </div>

      {/* THIS is the important part */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-xl aspect-square">
          <DrillingCanvas />
        </div>
      </div>
    </main>
  );
}
