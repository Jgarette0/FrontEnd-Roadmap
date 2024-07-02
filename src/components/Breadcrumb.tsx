import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function BreadcrumbNav() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/Projects">
            <BreadcrumbLink href="/">Projects</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <Link to="/reference">
                <DropdownMenuItem>Reference</DropdownMenuItem>
              </Link>
              <Link to="/profiles">
                <DropdownMenuItem>Playground</DropdownMenuItem>
              </Link>
              <Link to="/Roadmap">
                <DropdownMenuItem>Roadmap</DropdownMenuItem>
              </Link>

              <DropdownMenuItem>
                {" "}
                <a
                  href="https://abanganjilian.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BreadcrumbLink>
                    <div className="flex flex-row gap-1">
                      Photography <ExternalLink size=".8rem" />
                    </div>
                  </BreadcrumbLink>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link to="/about">
            <BreadcrumbLink> About</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link to="/home">
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbNav;
