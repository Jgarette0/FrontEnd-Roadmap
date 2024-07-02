import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ProjectLayout = () => {
  return (
    <>
      <Card className="flex flex-col w-full border-none gap-y-16">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row w-full justify-between">
            <div className="font-roboto text-lg md:text-4xl font-semibold  pt-2">
              AB Badminton
            </div>
            <div className="flex flex-row">
              <div className="flex gap-x-1 md:gap-x-2 place-items-center justify-center">
                <img
                  className="h-8 md:h-12"
                  src="https://skillicons.dev/icons?i=react"
                  alt="github"
                />

                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  className="h-8 md:h-12"
                  alt="vscode logo"
                />
              </div>
            </div>
          </div>

          <Card className="md:rounded-[20px] rounded-[10px] overflow-hidden">
            <iframe
              className="h-[500px] md:h-[600px]"
              src="https://badminton.pinamungajan.com"
              width="100%"
            ></iframe>
          </Card>
          <div className="flex flex-row w-full justify-end gap-1">
            <a
              href="https://badminton.pinamungajan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="outline">Live Demo</Button>
            </a>
            <a
              href="https://github.com/Jgarette0/AB-badminton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Repository</Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row w-full justify-between">
            <div className="font-roboto text-lg md:text-4xl font-semibold  pt-2">
              Portfolio
            </div>
            <div className="flex flex-row">
              <div className="flex gap-x-1 md:gap-x-2 place-items-center justify-center">
                <img
                  className="h-8 md:h-12"
                  src="https://skillicons.dev/icons?i=react"
                  alt="github"
                />

                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  className="h-8 md:h-12"
                  alt="vscode logo"
                />
              </div>
            </div>
          </div>

          <Card className="md:rounded-[20px] rounded-[10px] overflow-hidden">
            <iframe
              className="h-[500px] md:h-[600px]"
              src="https://jiliangarette.xyz"
              width="100%"
            ></iframe>
          </Card>
          <div className="flex flex-row w-full justify-end gap-1">
            <a
              href="https://jiliangarette.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button variant="outline">Live Demo</Button>
            </a>
            <a
              href="https://github.com/Jgarette0/JILIAN-root"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Repository</Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row w-full justify-between">
            <div className="font-roboto text-lg md:text-4xl font-semibold  pt-2">
              Personal Blog
            </div>
            <div className="flex flex-row">
              <div className="flex gap-x-1 md:gap-x-2 place-items-center justify-center">
                <img
                  className="h-8 md:h-12"
                  src="https://skillicons.dev/icons?i=html"
                  alt="github"
                />

                <img
                  src="https://skillicons.dev/icons?i=css"
                  className="h-8 md:h-12"
                  alt="vscode logo"
                />

                <img
                  src="https://skillicons.dev/icons?i=javascript"
                  className="h-8 md:h-12"
                  alt="vscode logo"
                />
              </div>
            </div>
          </div>

          <Card className="md:rounded-[20px] rounded-[10px] overflow-hidden">
            <iframe
              className="h-[500px] md:h-[600px]"
              src="https://blog.jiliangarette.xyz"
              width="100%"
            ></iframe>
          </Card>
          <div className="flex flex-row w-full justify-end gap-1">
            <a
              href="https://blog.jiliangarette.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Live Demo</Button>
            </a>
            <a
              href="https://github.com/Jgarette0/BLOG-local"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Repository</Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row w-full justify-between">
            <div className="font-roboto text-lg md:text-4xl font-semibold  pt-2">
              Classroom Finder (demo vr.)
            </div>
            <div className="flex flex-row">
              <div className="flex gap-x-1 md:gap-x-2 place-items-center justify-center">
                <img
                  className="h-8 md:h-12"
                  src="https://skillicons.dev/icons?i=php"
                  alt="github"
                />

                <img
                  src="https://skillicons.dev/icons?i=mysql"
                  className="h-8 md:h-12"
                  alt="vscode logo"
                />
              </div>
            </div>
          </div>

          <Card className="md:rounded-[20px] rounded-[10px] overflow-hidden">
            <iframe
              className="h-[600px] md:h-[600px]"
              src="http://cctc.42web.io/?i=1"
              width="100%"
            ></iframe>
          </Card>
          <div className="flex flex-row w-full justify-end gap-1">
            <Button
              variant="secondary"
              className="disabled hover:bg-secondary opacity-50"
            >
              Live Demo
            </Button>
            <a
              href="https://github.com/Jgarette0/classroom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Repository</Button>
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ProjectLayout;
