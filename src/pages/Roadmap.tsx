import { Header } from "@/components/Header";
import { LayoutRoadmap } from "@/components/Layout";
import DownloadPdf from "@/components/Pdf";
import { Card } from "@/components/ui/card";
import "../styles/global.css";

export function RoadmapPage() {
  return (
    <>
      <Card className="flex flex-row md:flex-col w-full border-none ">
        <Header />
        <DownloadPdf />
        <div className="btn flex flex-row gap-3 px-4 place-items-center"></div>
        {/* <img
          src="/frontend.svg"
          alt=""
          className="absolute opacity-20 max-w-5.5xl top-48 hidden"
        /> */}
        <LayoutRoadmap />
      </Card>
    </>
  );
}

export default RoadmapPage;
