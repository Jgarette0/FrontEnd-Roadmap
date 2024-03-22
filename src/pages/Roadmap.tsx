import { Header } from "@/components/Header";
import { LayoutRoadmap } from "@/components/Layout";
import DownloadPdf from "@/components/Pdf";
import { Card } from "@/components/ui/card";
import "../styles/global.css";
import Footer from "@/components/Footer";

export function RoadmapPage() {
  return (
    <>
      <div className="flex flex-col w-full px-2">
        <Card className="flex flex-row md:flex-col w-full border-none ">
          <Header />
        </Card>
        <DownloadPdf />
        <div className="w-full flex flex-col place-items-center justify-start">
          <LayoutRoadmap />
          <div className="foot flex flex-col place-items-center  w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadmapPage;
