import { Button } from "./ui/button";
import { Download } from "lucide-react";
function DownloadPdf() {
  const handleDownload = () => {
    const url = "/frontend.pdf"; // Assuming frontend.pdf is in the public directory
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "frontend.pdf"); // Set the correct filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className=" md:mr-0 mt-2"
      variant="secondary"
      onClick={handleDownload}
    >
      <p className="font-mono mr-2 text-xl hidden md:block">Download</p>
      <Download />
    </Button>
  );
}

export default DownloadPdf;
