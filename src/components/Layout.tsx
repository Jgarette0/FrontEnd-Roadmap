import { Button } from "./ui/button";
import { Card } from "./ui/card";
import "../styles/global.css";

export function LayoutRoadmap() {
  return (
    <>
      <div className="flex flex-col 0 top-20  md:block">
        {/* <Button className="w-28">Hello</Button>{" "} */}
        <div className="h-3000 flex flex-col ">
          <div className="0 h-226 flex flex-col place-items-center justify-end gap-2">
            <Card className="h-16 border-dotted border-l-4 rounded mb-2" />
            <div className=" text-4xl">Front-End</div>
            <Card className="h-16 border-l-4 rounded mb-2" />
          </div>
          <div className="0 h-550 flex flex-col">
            <div className="flex flex-row justify-start 0 ">
              <Button className="ml-6 w-44">HTML</Button>
              <Card className="w-60 md:w-52 xl:w-60 border-b-4 h-1 mt-4 mx-2 rounded" />
              <Button className="w-36">Internet</Button>
              <Card className="w-32 md:w-28 xl:w-32 border-dotted border-b-4 h-1 mt-4 mx-2 rounded" />
              <Button className="w-64 " variant="outline">
                How does internet work?
              </Button>
            </div>
            <div className="0 h-226 flex flex-row ">
              <div className="w-28 text-center flex flex-col place-items-end">
                <Card className="0 h-250 border-r-4" />
              </div>
              <div className="flex flex-row ">
                <div className="w-36 text-center flex flex-col place-items-center justify-center ">
                  <Card className="w-28 border-dotted border-b-4 h-1 rounded" />
                </div>
                <div className="w-62 text-center flex flex-col place-items-center justify-start gap-2 pt-2 padding mr-8">
                  <Button className="w-56 " variant="outline">
                    Learn the basics
                  </Button>
                  <Button className="w-56 " variant="outline">
                    Writing semantic HTML
                  </Button>
                  <Button className="w-56 " variant="outline">
                    Forms and validations
                  </Button>
                  <Button className="w-56 " variant="outline">
                    Accessibility
                  </Button>
                  <Button className="w-56 " variant="outline">
                    Seo
                  </Button>
                </div>
              </div>
              <div className="w-540 text-center flex flex-col place-items-end justify-start gap-1  pr-12 pt-1">
                <Button className="w-64 " variant="outline">
                  What is HTTP?
                </Button>
                <Button className="w-64 " variant="outline">
                  What is Domain Name?
                </Button>
                <Button className="w-64 " variant="outline">
                  What is hosting?
                </Button>
                <Button className="w-64 " variant="outline">
                  DNS and how does it work?
                </Button>
                <Button className="w-64 " variant="outline">
                  Browsers and how do they work?
                </Button>
              </div>
            </div>
            <div className="0 h-192 flex flex-row ">
              <div className="w-28 text-center flex flex-col place-items-end pl-28 ">
                <Card className="0 h-56 border-r-4" />
              </div>
              <div className="flex flex-col h-192 ">
                <div className="w-full h-44">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-36 ">
                    <Button className="w-44 " variant="outline">
                      Learn the basics
                    </Button>
                    <Button className="w-44 " variant="outline">
                      Making Layouts
                    </Button>
                    <Button className="w-44 " variant="outline">
                      Responsive design
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-192">
                <div className="w-full h-44 ">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-20 ">
                    <Button className="w-52 " variant="outline">
                      Learn the basics
                    </Button>
                    <Button className="w-52 " variant="outline">
                      Learn DOM manipulations
                    </Button>
                    <Button className="w-52 " variant="outline">
                      Fetch API /Ajax (XHR)
                    </Button>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex flex-col h-192">
                <div className="w-full h-44 ">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-20 ">
                    <Button className="w-28 ml-24" variant="outline">
                      Git
                    </Button>
                    <Card className="ml-40 w-2 border-dotted border-b-4 h-1 rounded" />
                    <Button className="w-52">Version Control Systems</Button>
                    <Button className="w-52 ">VCS hosting</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-row h-16 w-full">
              <div className="w-28 text-center flex flex-col place-items-end pl-28 ">
                <Card className="0 h-60 border-r-4" />
              </div>
              <div className="flex flex-row">
                <Card className="w-44 md:w-52 xl:w-44 border-b-4 h-1 mt-14 rounded" />
                <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                  <Card className="0 h-8 border-r-4 border-dotted" />
                  <Button className="w-28">CSS</Button>
                </div>
                <Card className="w-40 md:w-52 xl:w-40 border-b-4 h-1 mt-14 rounded" />
                <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                  <Card className="0 h-8 border-r-4 border-dotted" />
                  <Button className="w-28">JavaScript</Button>
                </div>
                <Card className="w-40 md:w-52 xl:w-40 border-b-4 h-1 mt-14 rounded" />
                <Card className="0 h-60 border-r-4" />
              </div>
              <div className="w-4"></div>
              <Card className="0 h-375 border-r-4" />
              <div className="w-12 text-center flex flex-col place-items-left justify-start gap-2  ">
                <div className="flex flex-row justify-end w-20">
                  <Card className="0 h-8 border-dotted border-r-4" />
                </div>
                <Button className="w-28 ml-8" variant="outline">
                  GitHub
                </Button>
                <Button className="w-28 ml-8" variant="outline">
                  GitLab
                </Button>
                <Button className="w-28 ml-8" variant="outline">
                  GitBucket
                </Button>
                <div className="py-2"></div>
                <Button className="w-28 ml-8" variant="outline">
                  npm
                </Button>
                <Button className="w-28 ml-8" variant="outline">
                  pnpm
                </Button>
                <Button className="w-28 ml-8" variant="outline">
                  yarn
                </Button>
              </div>
            </div>
          </div>
          <div className="0 pt-16 h-550 flex flex-col">
            <div className="0 h-192 flex flex-row ">
              <div className="flex flex-col h-192 justify-start">
                <div className="w-full h-44 flex flex-col justify-end">
                  <div className="w-62 text-center flex flex-col place-items-center justify-center gap-2 pt-8  ">
                    <Button className="w-44 " variant="outline">
                      BEM
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-192 ">
                <div className="w-full h-44 flex flex-col justify-end">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-20 ">
                    <Button className="w-44 " variant="outline">
                      Tailwind
                    </Button>
                    <Button className="w-44 " variant="outline">
                      Radix UI
                    </Button>
                    <Button className="w-44 " variant="outline">
                      Shadcn UI
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-192">
                <div className="w-full h-44 flex flex-col justify-end">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-20 ">
                    <Button className="w-44 " variant="outline">
                      Vue
                    </Button>
                    <Button className="w-44 " variant="outline">
                      Angular
                    </Button>
                    <Button className="w-44 " variant="outline">
                      React
                    </Button>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex flex-col h-192">
                <div className="w-full h-44 ">
                  <div className="w-62 text-center flex flex-col place-items-left justify-start gap-2 pt-8  pl-20 ">
                    <div className="py-20"></div>
                    <div className="flex flex-row justify-end w-44">
                      <Card className="0 h-6 border-dotted border-r-4" />
                    </div>
                    <Button className="w-52 ">Package Managers</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="0 h-12 flex flex-row  pl-8">
              <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                <Card className="0 h-8 border-r-4 border-dotted" />
                <Button className="w-32">CSS Architecture</Button>
              </div>
              <div className="flex flex-row">
                <Card className="w-28 md:w-52 xl:w-28 ml-4 border-b-4 h-1 mt-14 rounded" />
                <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                  <Card className="0 h-8 border-r-4 border-dotted" />
                  <Button className="w-28">Writing CSS</Button>
                </div>
                <Card className="w-36 md:w-52 xl:w-36 border-b-4 h-1 mt-14 rounded" />
                <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                  <Card className="0 h-8 border-r-4 border-dotted" />
                  <Button className="w-32">Pick a framework</Button>
                </div>
                <Card className="w-28 md:w-52 xl:w-28 border-b-4 h-1 mt-14 rounded ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
