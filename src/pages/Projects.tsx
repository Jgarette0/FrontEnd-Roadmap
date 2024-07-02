import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

export function ProjectsPage() {
  return (
    <>
      <Card className="border-none w-full h-full">
        <Header />
        <ProjectLayout />
        <div className="flex flex-col place-items-center">
          <Footer />
        </div>
      </Card>
    </>
  );
}

export default ProjectsPage;
