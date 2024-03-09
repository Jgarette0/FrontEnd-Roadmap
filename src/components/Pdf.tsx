import { Button } from "./ui/button";

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

  return <Button onClick={handleDownload}>Download PDF</Button>;
}

export default DownloadPdf;
