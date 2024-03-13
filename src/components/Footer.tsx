import { Github, Facebook, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark ">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div>
            <h5 className="font-bold uppercase mb-6">Details</h5>
            <ul className="space-y-4">
              <li>
                <a className="hover:underline" href="#">
                  About me
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Reference
                </a>
              </li>

              <li className="font-bold">CONTACT</li>
              <li className="font-bold">(+639 )123456789</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">Source Code</h5>
            <ul className="space-y-4">
              <li>
                <a className="hover:underline flex flex-row gap-1" href="#">
                  Github
                  <ExternalLink size="1rem" />
                </a>
              </li>
              <li>
                <a className="hover:underline flex flex-row gap-1" href="#">
                  Google Drive
                  <ExternalLink size="1rem" />
                </a>
              </li>
              <li className="font-bold">OTHER</li>
              <li className="hover:underline">
                <a
                  href="https://abanganjilian.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row gap-1">
                    Photography <ExternalLink size="1rem" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">HOSTED AT</h5>
            <ul className="space-y-4">
              <li>
                <a className="hover:underline" href="#">
                  Vercel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-6">My Social</h5>
            <div className="flex space-x-4">
              <a className="hover:underline" href="#">
                <Github className="h-6 w-6" />
              </a>
              <a className="hover:underline" href="#">
                <Facebook className="h-6 w-6" />
              </a>
              <a className="hover:underline" href="#">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <div className="mb-4 md:mb-0"></div>
          <div className="space-x-6 w-full flex flex-row justify-center">
            <a className="hover:underline" href="#">
              Legal and Policies
            </a>
            <span>© Abangan</span>
            <a className="hover:underline" href="#">
              Philippines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
