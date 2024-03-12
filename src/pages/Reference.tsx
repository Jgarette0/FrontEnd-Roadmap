import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export function ReferencePage() {
  return (
    <>
      <Card className="flex flex-col gap-10 w-full h-screen border-none">
        <Card className="flex flex-col gap-10 w-full">
          <Header />
        </Card>
        <Card className="flex flex-col place-items-center justify-center h-screen border-none">
          <h1 className="font-roboto font-extrabold text-6xl italic opacity-80 hover:opacity-100 select-none text-shortTx md:text-largeTx text-center">
            This is Reference Page
          </h1>
        </Card>
      </Card>
    </>
  );
}

export default ReferencePage;
