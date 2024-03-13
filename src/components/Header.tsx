import { ModeToggle } from "@/components/ModeToggle";
import { Card } from "@/components/ui/card";
import Authentication from "@/pages/Auth";
import { Button } from "./ui/button";
import { BreadcrumbNav } from "./Breadcrumb";
import Technologies from "./Technology";
export function Header() {
  return (
    <>
      <div className="flex flex-row md:flex-row-reverse plalce-items-center max-w-5.5xl gap-2 p-2 sticky to-purple-50 z-40 justify-between border-none flex-wrap mx-1 bg-none select-none">
        <div className="flex flex-row-reverse md:flex-row-reverse place-items-center gap-2">
          <ModeToggle />
          <Technologies />
          <Button variant="secondary" className="">
            <Authentication />
          </Button>
        </div>
        <div className="flex flex-row place-items-center justify-center mt-2 md:mt-0 bg-none">
          <BreadcrumbNav />
        </div>
      </div>
    </>
  );
}
