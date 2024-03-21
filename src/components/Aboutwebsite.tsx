import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { RiOpenaiFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { SignInButton } from "@clerk/clerk-react";
export function MyWebsite() {
  return (
    <>
      <Card className="px-4 border-none">
        <Card className="flex flex-col w-full h-350 border-none md:px-0">
          <div className="w-full flex flex-col place-items-center justify-center text-2xl md:text-5xl hover:opacity-80 h-32 select-none font-extrabold font-sans tracking-tighter">
            About My Website
          </div>
        </Card>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <Link to="/Roadmap">✨Front-End Roadmap</Link>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify indent-4">
              This page is dedicated to providing a front-end roadmap, a
              sequential guide, whether you're just starting out or looking to
              expand your skills. Here, you'll find a curated list of topics and
              technologies to learn.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl underline hover:italic h-12 flex flex-col justify-center">
              <div className="flex flex-row gap-1">
                <a
                  href="https://abanganjilian.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷Photography
                </a>
                <ExternalLink />
              </div>
            </div>
            <div className="text-l md:text-2xl font-roboto  indent-2">
              The photography portfolio from Foundation Week was part of the web
              development subject.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl hover:italic h-12 flex flex-col justify-center">
              <Button
                className="flex flex-row w-48 font-mono text-xl md:text-3xl  h-12 justify-center pl-2 "
                variant="outline"
              >
                🔒
                <SignInButton />
              </Button>
            </div>
            <div className="text-l md:text-2xl font-roboto text-justify indent-4">
              Integrate a secure third-party APIs like Clerk.io for a seamless
              sign-in and registration experience. Gmail Facebook, or GitHub
              login options.
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-mono text-xl md:text-3xl h-12 flex flex-col justify-center place-items-center">
              <div>🔥Programming Language Used</div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-4 place-items-center justify-center">
                <RiOpenaiFill className="size-28" />
              </div>
            </a>
          </div>
        </div>

        <div className="font-mono text-xl md:text-3xl h-12 flex flex-col justify-center place-items-center">
          <div>Chat GPT</div>
        </div>
      </Card>
    </>
  );
}
