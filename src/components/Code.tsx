import { useState } from "react";
import { Clipboard } from "lucide-react";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

export default function Component() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("_ npx v0 add w7rcFuAsUIC");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-dark p-4 rounded-lg flex items-center justify-between w-580">
      <span className="text-light font-mono text-sm">
        _ npx v0 add w7rcFuAsUIC
      </span>
      <Clipboard className=" cursor-pointer" onClick={handleCopy}>
        {copied ? <Check /> : <Clipboard />}
        {copied ? "Copied!" : "Copy to Clipboard"}
      </Clipboard>
    </Card>
  );
}
