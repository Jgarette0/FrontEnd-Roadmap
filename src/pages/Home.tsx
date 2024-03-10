import { Header } from "@/components/Header";
import Introduction from "@/components/Introduction";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

{
  /* <DownloadPdf />
<img src="./frontend.svg" alt="" /> */
}
export default function HomePage() {
  return (
    <>
      <Card className="flex flex-col gap-10 w-full border-none  h-screen">
        <Header />
        <Spotlight className="" fill="white" />
        <div className=" w-full flex flex-col place-items-center sm:h-screen sm:justify-center justify-center">
          <Introduction />
        </div>
      </Card>
    </>
  );
}
