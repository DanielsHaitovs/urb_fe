import DrillingCanvas from "./components/SpinningDrill";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to URB</h1>
      </div>

      {/* THIS is the important part */}
      <div className="w-full h-full absolute right-0 top-0 bottom-0 aspect-square">
          <DrillingCanvas />
      </div>
    </main>
  );
}
