import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Introduction from "@/components/Introduction";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export default function HomePage() {
  return (
    <>
      <Card className="flex flex-col gap-10 w-full border-none ">
        <Header />
        <Spotlight className="" fill="white" />
        <div className=" w-full flex flex-col place-items-center py-48 md:py-0 md:h-screen md:justify-center justify-center">
          <Introduction />
        </div>
        <div className="md:hidden">
          <Footer />
        </div>
      </Card>
    </>
  );
}
