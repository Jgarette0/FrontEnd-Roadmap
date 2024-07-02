import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

export function MyWebsite() {
  return (
    <>
      <Card className="px-4 border-none">
        <Card className="flex flex-col w-full h-full border-none md:px-0">
          <div className="w-full flex flex-col place-items-center justify-center text-2xl md:text-5xl hover:opacity-80 h-32 select-none font-extrabold font-sans tracking-tighter">
            What You Can Find on This Website:
          </div>
        </Card>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <Link to="/Projects">🏸AB Badminton</Link>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify">
              A website showcasing all the information about AB badminton
              training camp.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <Link to="/Projects">💻Portfolio</Link>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify">
              A portfolio website showcasing my web development projects.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <div className="flex flex-row gap-1">
                <a
                  href="https://gallery.jiliangarette.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷Photography
                </a>
                <ExternalLink />
              </div>
            </div>
            <div className="text-l md:text-2xl font-roboto ">
              This minimal photography portfolio from CCTC Foundation Week was
              part of a web development subject project.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <Link to="/Projects">📝Personal Blog</Link>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify">
              A website for creating and storing blogs locally.
            </div>
          </div>{" "}
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <Link to="/Projects">🏫Vacant Classroom Finder</Link>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify">
              A platform for teachers to select and occupy classrooms, and for
              students to view available and occupied rooms.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl flex flex-col justify-center place-items-center">
              <Card className="flex flex-col w-full h-full border-none md:px-0">
                <div className="w-full flex flex-col place-items-center justify-center text-2xl md:text-4xl hover:opacity-80 h-32 select-none font-bold font-sans tracking-tighter">
                  Technologies:
                </div>
                <Card className="border-none flex flex-col place-items-center gap-2 mb-2">
                  <div className="flex gap-x-2 place-items-center justify-center">
                    <img
                      src="https://skillicons.dev/icons?i=html"
                      height="100"
                      alt="html5 logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=css"
                      height="100"
                      alt="css3 logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=js"
                      height="100"
                      alt="javascript logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=php"
                      height="100"
                      alt="php logo"
                    />
                  </div>

                  <div className="flex gap-x-2 place-items-center justify-center">
                    <img
                      src="https://skillicons.dev/icons?i=tailwind"
                      height="100"
                      alt="tailwindcss logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=react"
                      height="100"
                      alt="react logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=mysql"
                      height="100"
                      alt="mysql logo"
                    />
                  </div>

                  <div className="flex gap-x-2 place-items-center justify-center">
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      height="85"
                      alt="github"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=vscode"
                      height="85"
                      alt="vscode logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=git"
                      height="85"
                      alt="git logo"
                    />

                    <img
                      src="https://skillicons.dev/icons?i=vite"
                      height="85"
                      alt="vite logo"
                    />
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
