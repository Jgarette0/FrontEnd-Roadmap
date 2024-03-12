import { Header } from "@/components/Header";
import { LayoutRoadmap } from "@/components/Layout";
import DownloadPdf from "@/components/Pdf";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "../styles/global.css";

export function RoadmapPage() {
  return (
    <>
      <Card className="flex flex-col w-full border-none">
        <Header />
        <div className="btn flex flex-row gap-3 px-4 place-items-center">
          <Button className="w-18 h-9 hidden md:block">Share</Button>
          <DownloadPdf />
        </div>
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
