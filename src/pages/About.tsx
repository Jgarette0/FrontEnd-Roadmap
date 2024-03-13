import { ThisIsMe } from "@/components/Aboutme";
import { MyWebsite } from "@/components/Aboutwebsite";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export function AboutPage() {
  return (
    <>
      <Card className="border-none w-full">
        <Header />
        <ThisIsMe />
        <MyWebsite />
        <Footer />
      </Card>
    </>
  );
}

export default AboutPage;
