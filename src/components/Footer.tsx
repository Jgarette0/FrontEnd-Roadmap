import { Github, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark ">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div>
            <h5 className="font-bold uppercase mb-6">Details</h5>
            <ul className="space-y-4">
              <li>
                <Link to="/About" className="hover:underline">
                  About me
                </Link>
              </li>
              <li>
                <Link to="/Reference" className="hover:underline">
                  Reference
                </Link>
              </li>

              <li className="font-bold">CONTACT</li>
              <li className="font-bold">09661808543</li>
              <li>
                <a
                  className="hover:underline flex flex-row gap-1"
                  href="mailto:jiliangarette@gmail.com"
                >
                  jiliangarette@gmail.com
                  <ExternalLink size="1rem" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">
              <a
                href="https://abanganjilian.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:underline flex flex-row gap-1"
                  href="https://github.com/Jgarette0/Frontend-Roadmap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                  <ExternalLink size="1rem" />
                </a>
              </li>

              <li className="font-bold">OTHER</li>
              <li className="hover:underline">
                <a
                  href="https://pinamungajan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row gap-1">
                    React Template <ExternalLink size="1rem" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">HOSTED AT</h5>
            <ul className="space-y-4">
              <li>
                <a className="hover:underline" href="https://vercel.com">
                  Vercel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">My Social</h5>
            <div className="flex space-x-4">
              <a
                className="hover:underline"
                href="https://github.com/Jgarette0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                className="hover:underline"
                href="https://thisisnotajumpscare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                className="hover:underline"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <div className="mb-4 md:mb-0"></div>
          <div className="space-x-6 w-full flex flex-row justify-center">
            <a
              className="hover:underline"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philippines
            </a>
            <span>©Abangan</span>
            <a
              className="hover:underline"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              2024
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
