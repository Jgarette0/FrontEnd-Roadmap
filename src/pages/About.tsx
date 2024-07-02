import { ThisIsMe } from "@/components/Aboutme";
import { MyWebsite } from "@/components/Aboutwebsite";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export function AboutPage() {
  return (
    <>
      <Card className="border-none w-ful h-full">
        <Header />
        <ThisIsMe />
        <MyWebsite />
        <div className="flex flex-col place-items-center">
          <Footer />
        </div>
      </Card>
    </>
  );
}

export default AboutPage;
