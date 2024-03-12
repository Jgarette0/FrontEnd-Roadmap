import { Header } from "@/components/Header";
import Introduction from "@/components/Introduction";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export default function HomePage() {
  return (
    <>
      <Card className="flex flex-col gap-10 w-full border-none  h-screen">
        <Header />
        <Spotlight className="" fill="white" />
        <div className=" w-full flex flex-col place-items-center md:h-screen md:justify-center justify-center">
          <Introduction />
        </div>
      </Card>
    </>
  );
}
