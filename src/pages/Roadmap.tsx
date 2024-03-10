import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export function RoadmapPage() {
  return (
    <>
      <Card className="flex flex-col gap-10 w-full h-screen border-none">
        <Card className="flex flex-col gap-10 w-full">
          <Header />
        </Card>
        <Card className="flex flex-col place-items-center justify-center h-screen border-none">
          <h1 className="font-roboto font-extrabold text-6xl italic opacity-80 hover:opacity-100 select-none text-shortTx sm:text-largeTx text-center">
            This is Roadmap Page
          </h1>
        </Card>
      </Card>
    </>
  );
}

export default RoadmapPage;
