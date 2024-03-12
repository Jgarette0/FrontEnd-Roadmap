import { Button } from "./ui/button";
import { Card } from "./ui/card";
import "../styles/global.css";

export function LayoutRoadmap() {
  return (
    <>
      <div className="try flex flex-col place-items-center justify-start box-border">
        <div className="flex flex-col  md:top-20 ">
          <div className="h-3000 flex flex-col ">
            <div className="0 h-226 flex flex-col place-items-center justify-end gap-2 ">
              <Card className="h-16 border-dotted border-l-4 rounded mb-2" />
              <div className=" text-4xl">Front-End</div>
              <Card className="h-16 border-l-4 rounded mb-2" />
            </div>
            <div className="0 h-550 flex flex-col">
              <div className="flex flex-row justify-start 0 ">
                <Button className="ml-6 w-44">HTML</Button>
                <Card className="w-60   border-b-4 h-1 mt-4 mx-2 rounded" />
                <Button className="w-36">Internet</Button>
                <Card className="w-32   border-dotted border-b-4 h-1 mt-4 mx-2 rounded" />
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
                  <Card className="w-44  border-b-4 h-1 mt-14 rounded" />
                  <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                    <Card className="0 h-8 border-r-4 border-dotted" />
                    <Button className="w-28">CSS</Button>
                  </div>
                  <Card className="w-40  border-b-4 h-1 mt-14 rounded" />
                  <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                    <Card className="0 h-8 border-r-4 border-dotted" />
                    <Button className="w-28">JavaScript</Button>
                  </div>
                  <Card className="w-40 border-b-4 h-1 mt-14 rounded" />
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
            <div className="0 pt-16 h-450 flex flex-col ">
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
                      <Button className="w-44 " variant="outline">
                        Svelte
                      </Button>
                      <Button className="w-44 " variant="outline">
                        Solid JS
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
                <div className="flex flex-row ">
                  <Card className="w-28  ml-4 border-b-4 h-1 mt-14 rounded" />
                  <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                    <Card className="0 h-8 border-r-4 border-dotted" />
                    <Button className="w-28">Writing CSS</Button>
                  </div>
                  <Card className="w-40  border-b-4 h-1 mt-14 rounded" />
                  <div className="w-28 h-20 text-center flex flex-col place-items-center justify-start gap-1">
                    <Card className="0 h-8 border-r-4 border-dotted" />
                    <Button className="w-32">Pick a framework</Button>
                  </div>
                  <Card className="w-24  border-b-4 h-1 mt-14 rounded ml-4" />
                </div>
              </div>
              <div className="flex flex-row ">
                <div className="w-24 mt-8 text-center flex flex-col place-items-end ">
                  <Card className="0 h-24 border-r-4" />
                </div>
                <div className="flex flex-col h-32 justify-end">
                  <Card className="w-540  border-b-4 h-1 mt-14 rounded" />
                </div>
                <div className="flex flex-col h-36 justify-end">
                  <Button className="w-32">Build Tools</Button>
                </div>
                <div className="flex flex-col h-32 justify-end ">
                  <Card className="w-28 border-dotted  border-b-4 h-1 mt-14 rounded" />
                </div>
                <div className="w-32 ml-4 text-center flex flex-col place-items-left justify-start gap-2 mt-16  ">
                  <Button className="w-28 " variant="outline">
                    Vite
                  </Button>
                  <Button className="w-28 " variant="outline">
                    esbuild
                  </Button>
                  <Button className="w-28 " variant="outline">
                    Webpack
                  </Button>
                  <Button className="w-28 " variant="outline">
                    Rollup
                  </Button>
                  <Button className="w-28 " variant="outline">
                    npm scripts
                  </Button>
                  <Button className="w-28 " variant="outline">
                    Parcel
                  </Button>
                  <Button className="w-28 " variant="outline">
                    Prettier
                  </Button>
                  <Button className="w-28" variant="outline">
                    ESLint
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row h-8 justify-end mr-64 pr-24">
                <Card className="0 h-8 border-r-4" />
              </div>
              <div className="flex flex-row  pl-16">
                <div className="flex flex-col justify-end ">
                  <Card className="0 h-6 border-r-4" />
                </div>
                <div className="flex flex-col justify-center">
                  <Card className="w-8  border-b-4 h-1 rounded" />
                </div>
                <Button className="w-64">Web security basics</Button>
                <div className="flex flex-col justify-center">
                  <Card className="w-64 border-b-4 h-1 rounded" />
                </div>
                <div className="flex flex-col justify-end">
                  <Button className="w-44"> Testing your Apps</Button>
                </div>
              </div>
              <div className="flex flex-row pl-16">
                <div className="flex flex-col justify-end ">
                  <Card className="0 h-215 border-r-4" />
                </div>
                <div className="w-64 flex flex-col place-items-end ">
                  <div className="flex flex-row justify-center w-48 py-2">
                    <Card className="0  h-4 border-dotted border-r-4" />
                  </div>
                  <div className="flex flex-row gap-1">
                    <Button className="w-24" variant="outline">
                      CORS
                    </Button>
                    <Button className="w-24" variant="outline">
                      HTTPS
                    </Button>
                  </div>
                  <Button className="w-48" variant="outline">
                    Testing your Apps
                  </Button>
                  <Button className="w-48" variant="outline">
                    Testing your Apps
                  </Button>
                </div>
                <div className="w-300 flex flex-col place-items-left justify-center h-48 ">
                  <Card className="p-4 ml-8 text-justify">
                    Learn the difference between Unit, Integration, and
                    Functional tests and learn how to write them with the tools
                    listed on the right.
                  </Card>
                </div>
                <div className="w-48 flex flex-col place-items-cente h-48">
                  <div className="flex flex-col place-items-center mr-12">
                    <div className="flex flex-row justify-center w-44 py-2">
                      <Card className="0 h-4 border-dotted border-r-4" />
                    </div>
                    <Button className="w-24" variant="outline">
                      Vitest
                    </Button>
                    <Button className="w-24" variant="outline">
                      Jest
                    </Button>
                    <div className="flex flex-row justify-center w-44 py-1">
                      <Card className="0 h-4 border-dotted border-r-4" />
                    </div>
                    <Button className="w-24" variant="outline">
                      Playright
                    </Button>
                    <Button className="w-24" variant="outline">
                      Cypress
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row pl-16 ">
                <div className="flex flex-col justify-start ">
                  <Card className="0 h-6 border-r-4" />
                </div>
                <div className="">
                  <div className="flex flex-row ">
                    <div className="flex flex-col justify-center">
                      <Card className="w-8  border-b-4 h-1 rounded" />
                    </div>
                    <div className="w-28 text-center flex flex-col place-items-center justify-center gap-1">
                      <Button className="w-36">Web Components</Button>
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                      <Card className="w-16  border-b-4 h-1 rounded" />
                    </div>
                    <div className="w-28 text-center flex flex-col place-items-center justify-center gap-1">
                      <Button className="w-28">Type Checkers</Button>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Card className="w-540  border-b-4 h-1 rounded" />
                    </div>
                    <div className="flex flex-col justify-end ">
                      <Card className="0 h-6 border-r-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pl-16 ">
                <div className=" w-48 h- flex  flex-col place-items-center">
                  <div className="flex flex-row justify-center w-48 py-2">
                    <Card className="0  h-4 border-dotted border-r-4" />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <Button className="w-40" variant="outline">
                      HTML Templates
                    </Button>
                    <Button className="w-40" variant="outline">
                      Custom Elements
                    </Button>
                    <Button className="w-40" variant="outline">
                      Shadow DOM
                    </Button>
                  </div>
                </div>
                <div className=" w-48 h-192">
                  <div className=" w-48 h- flex  flex-col place-items-center">
                    <div className="flex flex-row justify-center w-48 py-2">
                      <Card className="0  h-4 border-dotted border-r-4" />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <Button className="w-40" variant="outline">
                        TypeScript
                      </Button>
                    </div>
                  </div>
                </div>
                <div className=" w-40 h- ml-4">
                  <div className=" w-40 h-48 justify-center  flex flex-col place-items-end">
                    <div className="flex flex-col justify-center gap-4">
                      <Button className="w-40" variant="outline">
                        Universal
                      </Button>
                      <Button className="w-40" variant="outline">
                        Next
                      </Button>
                      <Button className="w-40" variant="outline">
                        Nuxt
                      </Button>
                    </div>
                  </div>
                </div>
                <div className=" w-4 h-192 ">
                  <div className=" w-4 h-48 justify-center  flex flex-col place-items-center">
                    <div className="flex flex-col gap-12">
                      <div className="flex flex-col justify-center">
                        <Card className="w-4 border-dotted  border-b-4 h-1 rounded" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Card className="w-4 border-dotted border-b-4 h-1 rounded" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Card className="w-4 border-dotted  border-b-4 h-1 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-40 h-192">
                  <div className=" w-40 h-48 justify-center  flex flex-col place-items-end">
                    <div className="flex flex-col justify-center gap-4">
                      <Button className="w-40" variant="outline">
                        Angular
                      </Button>
                      <Button className="w-40" variant="outline">
                        React
                      </Button>
                      <Button className="w-40" variant="outline">
                        Vue
                      </Button>
                    </div>
                  </div>
                </div>
                <div className=" w-12 h-192">
                  <div className="0 w-12 h-48 justify-center  flex flex-col place-items-center">
                    <div className="flex flex-col">
                      <div className="flex flex-col justify-center">
                        <Card className="w-8 border-dotted  border-b-4 h-1 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-48 h-192">
                  <div className=" w-48 h- flex  flex-col place-items-center">
                    <div className="flex flex-row justify-center w-48 ">
                      <Card className="0  h-20  border-r-4" />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <Button className="w-44"> Server Side Rendering</Button>
                    </div>
                    <div className="flex flex-row justify-center w-48 ">
                      <Card className="0  h-20  border-r-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full  h-12  place-items-end">
                <div className="flex flex-row justify-center w-52 pl-1">
                  <Card className="0  h-12  border-r-4" />
                </div>
              </div>
              <div className="flex flex-col w-full  h-12  place-items-end">
                <div className="flex flex-row justify-center pl-1">
                  <Button variant="outline" className="w-44">
                    Apollo
                  </Button>
                  <div className="flex flex-col justify-center">
                    <Card className="w-8 border-dotted  border-b-4 h-1 rounded" />
                  </div>
                  <Button className="w-44"> GraphQL</Button>
                </div>
              </div>
              <div className="flex flex-col w-full  h-12 place-items-end ">
                <div className="flex flex-row justify-center gap-3 pr-24 pl-2">
                  <Button variant="outline" className="w-44">
                    Relay Modern
                  </Button>
                  <Card className="0  h-12 ml-24 border-r-4" />
                </div>
              </div>
              <div className=" flex flex-row ">
                <div className="flex flex-row pl-16 ">
                  <div className=" w-40 h- ml-4">
                    <div className=" w-40 h-48 justify-center  flex flex-col place-items-end">
                      <div className="flex flex-col justify-center gap-1">
                        <Button className="w-40" variant="outline">
                          Storage
                        </Button>
                        <Button className="w-40" variant="outline">
                          Web Sockets
                        </Button>
                        <Button className="w-40" variant="outline">
                          Server Sent Evenets
                        </Button>
                        <Button className="w-40" variant="outline">
                          Sevice Workers
                        </Button>
                        <Button className="w-40" variant="outline">
                          Location
                        </Button>
                        <Button className="w-40" variant="outline">
                          Notifications
                        </Button>
                        <Button className="w-40" variant="outline">
                          Device Orientation
                        </Button>
                        <Button className="w-40" variant="outline">
                          Payments
                        </Button>
                        <Button className="w-40" variant="outline">
                          Credentials
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className=" w-4 h-192 ">
                    <div className=" w-4 h-48 justify-center  flex flex-col place-items-center">
                      <div className="flex flex-col gap-12">
                        <div className="flex flex-col justify-center">
                          <Card className="w-4 border-dotted  border-b-4 h-1 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-40 h-192">
                    <div className=" w-40 h-48 justify-center  flex flex-col place-items-end">
                      <div className="flex flex-col justify-center gap-1">
                        <Button className="w-40" variant="outline">
                          PRPL Pattern
                        </Button>
                        <Button className="w-40" variant="outline">
                          Rail Modern
                        </Button>
                        <Button className="w-40" variant="outline">
                          Performance Metrics
                        </Button>
                        <Button className="w-40" variant="outline">
                          Using Lighthouse
                        </Button>
                        <Button className="w-40" variant="outline">
                          Using DevTools
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className=" w-12 h-192">
                    <div className="0 w-12 h-48 justify-center  flex flex-col place-items-center ">
                      <div className="flex flex-col">
                        <div className="flex flex-col justify-center">
                          <Card className="w-12 border-dotted  border-b-4 h-1 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-48 h-192 ">
                    <div className=" w-48 h- flex  flex-col place-items-center">
                      <div className="flex flex-row justify-center w-48 ">
                        <Card className="0  h-20  border-none" />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <Button className="w-44"> Progressive Web Apps</Button>
                      </div>

                      <div className="flex flex-row justify-center w-48 ">
                        <Card className="0  h-20  border-r-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <Card className="w-48  border-b-4 h-1 rounded" />
                  </div>
                  <div className=" w-48 h-192">
                    <div className=" w-48 h- flex  flex-col place-items-center">
                      <div className="flex flex-row justify-center w-48 ">
                        <Card className="0  h-20  border-r-4" />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <Button className="w-44"> Static Generators</Button>
                      </div>
                      <div className="flex flex-row justify-center w-48 ">
                        <Card className="0  h-20 border-dotted border-r-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-row  ">
                  <div className="ml-52 w-64 h-48  flex flex-col place-items-center justify-end gap-2">
                    <Button className="w-40" variant="outline">
                      PRPL Pattern
                    </Button>
                    <Button className="w-40" variant="outline">
                      Rail Modern
                    </Button>
                    <Button className="w-40" variant="outline">
                      Performance Metrics
                    </Button>
                  </div>
                  <div className="flex flex-row justify-center w-48 ">
                    <Card className="0  h-48  border-r-4" />
                  </div>
                  <div className="w-380 h-48 ">
                    <div className=" w-380 h-48  flex flex-col place-items-end gap-2">
                      <div className="flex flex-row justify-center w-44 mr-1">
                        <Card className="0  h-8 border-dotted border-r-4" />
                      </div>
                      <div className="mr-3 flex flex-col gap-2">
                        <Button className="w-40" variant="outline">
                          PRPL Pattern
                        </Button>
                        <Button className="w-40" variant="outline">
                          Rail Modern
                        </Button>
                        <Button className="w-40" variant="outline">
                          Performance Metrics
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border- flex flex-row ml-60">
                  <div className="w-64">
                    <div className="flex flex-row justify-center w-48 ">
                      <Card className="0  h-12 border-dotted border-r-4" />
                    </div>
                  </div>
                  <div className="w-20">
                    <div className="flex flex-row justify-center w-32 ">
                      <Card className="0   h-12  border-r-4" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ml-64  place-items-start00 ">
                  <div className="flex flex-col justify-center gap-2">
                    <Button className="w-44"> Progressive Web Apps</Button>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <Card className="w-12   border-b-4 h-1 rounded" />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <Button className="w-44"> Progressive Web Apps</Button>
                  </div>
                  <Card className="w-8 ml-1 border-dotted mt-4 border-b-4 h-1 rounded" />
                  <Button className="w-44" variant="outline">
                    Progressive Web Apps
                  </Button>
                </div>
              </div>

              <div className="flex flex-row ml-64 place-items-start w-500">
                <div className="flex flex-row h-24 justify-center place-items-end pr-44">
                  <Card className="0  h-24 ml-20 border-r-4" />
                  <Card className="w-48 sborder-b-4 h-1 rounded" />
                  <div className="w-40"></div>
                  <div className="flex flex-col gap-2 w-64 align-items-end  pb-2">
                    <Button className="w-44" variant="outline">
                      Progressive Web Apps
                    </Button>
                    <Button className="w-44" variant="outline">
                      Progressive Web Apps
                    </Button>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col place-items-center">
                <Card className="  h-12 border-r-4" />
              </div>
              <div className=" flex flex-col place-items-center justify-center  gap-4">
                <Card className="w-450 h-36 text-center flex flex-col justify-center gap-2">
                  Continue Learning with following relevant tracks
                  <div className="flex flex-row place-items-center justify-center gap-2">
                    <Button className="w-44"> Progressive Web Apps</Button>
                    <Button className="w-44"> Progressive Web Apps</Button>
                  </div>
                </Card>
              </div>
              <div className=" flex flex-col place-items-center">
                <Card className="  h-12 border-dotted border-r-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
