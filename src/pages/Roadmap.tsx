import { Header } from "@/components/Header";
import { LayoutRoadmap } from "@/components/Layout";
import DownloadPdf from "@/components/Pdf";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function RoadmapPage() {
  return (
    <>
      <Card className="flex flex-col w-full border-none">
        <Header />
        <div className="flex flex-row gap-3 px-4 h-36 place-items-center">
          <Button className="w-24">Share</Button>
          <DownloadPdf />
        </div>
        <img
          src="/frontend.svg"
          alt=""
          className="absolute opacity-20 max-w-5.5xl top-48 hidden"
        />
        <LayoutRoadmap />
      </Card>
    </>
  );
}

export default RoadmapPage;
