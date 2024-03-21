import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Sparkles,
  Lock,
  Palette,
  CloudSun,
  Server,
  Code,
  Brush,
} from "lucide-react";
import { Card } from "./ui/card";

export function References() {
  return (
    <BentoGrid className="w-full mx-auto select-none">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Card className="flex flex-1 place-items-center justify-center w-full h-full min-h-[6rem] rounded-xl font-serif font-bold text-4xl text-center">
    {children}
  </Card>
);

const items = [
  {
    title: "Authentication",
    description:
      "Third party authentication for Gmail, Facebook, and GitHub login.",
    header: <Title>Clerk</Title>,
    icon: <Lock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI Theme",
    description:
      "Responsible for UI theme such as palette and Darkmode toggle.",
    header: <Title>Shadcn UI</Title>,
    icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Spotlight",
    description:
      "Responsible for the animation in the landing page dark mode spotlight.",
    header: <Title>Aceternity UI</Title>,
    icon: <Palette className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Component",
    description: "A Component library I used such as Accordion.",
    header: <Title>Radix UI</Title>,
    icon: <Brush className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Icons",
    description: "An modern Icon library",
    header: <Title>Lucide</Title>,
    icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Meta Tags",
    description: "Site logo and other meta tags functionality",
    header: <Title>Metatags</Title>,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Host",
    description: "Static website hosting.",
    header: <Title>Vercel</Title>,
    icon: <Server className="h-4 w-4 text-neutral-500" />,
  },
];
export default References;
