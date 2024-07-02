import { Card } from "./ui/card";

export function TechIcons() {
  return (
    <>
      <div className="flex flex-row justify-end gap-5">
        <Card className="border-none flex flex-col place-items-center gap-2">
          <div className="flex gap-x-2 place-items-center justify-center">
            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=html"
              height="100"
              alt="html5 logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=css"
              height="100"
              alt="css3 logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=js"
              height="100"
              alt="javascript logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=php"
              height="100"
              alt="php logo"
            />
          </div>

          <div className="flex gap-x-2 place-items-center justify-center">
            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=tailwind"
              height="100"
              alt="tailwindcss logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=react"
              height="100"
              alt="react logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=mysql"
              height="100"
              alt="mysql logo"
            />
          </div>

          <div className="flex gap-x-2 place-items-center justify-center">
            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=github"
              height="85"
              alt="github"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=vscode"
              height="85"
              alt="vscode logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=git"
              height="85"
              alt="git logo"
            />

            <img
              className="hover:scale-150 transition-all duration-300 ease-in-out"
              src="https://skillicons.dev/icons?i=vite"
              height="85"
              alt="vite logo"
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default TechIcons;
