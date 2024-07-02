import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "./ui/button";
import { BreadcrumbNav } from "./Breadcrumb";
import Technologies from "./Technology";
import { ExternalLink } from "lucide-react";
export function Header() {
  return (
    <>
      <div className="flex flex-row md:flex-row-reverse plalce-items-center max-w-5.5xl gap-2 p-2 sticky to-purple-50 z-40 justify-between border-none flex-wrap mx-1 bg-none select-none">
        <div className="flex flex-row-reverse md:flex-row-reverse place-items-center gap-2">
          <ModeToggle />
          <Technologies />
          <a
            href="http://github.com/Jgarette0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="flex gap-1 place-items-center group"
            >
              <div>Github</div>
              <div>
                <ExternalLink
                  size={12}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
                />
              </div>
            </Button>
          </a>
        </div>
        <div className="flex flex-row place-items-center justify-center mt-2 md:mt-0 bg-none">
          <BreadcrumbNav />
        </div>
      </div>
    </>
  );
}
