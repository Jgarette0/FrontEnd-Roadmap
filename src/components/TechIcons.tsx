import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TechIcons() {
  return (
    <>
      <div className="flex flex-row justify-end gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/clerk.png" alt="@clerk" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/vitejs.png" alt="@vite" />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row justify-start gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/react.png" alt="@react" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/tailwindcss.png"
            alt="@tailwind"
          />
          <AvatarFallback>TW</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-row justify-end gap-5">
        <Avatar>
          <AvatarImage
            src="https://github.com/react-router.png"
            alt="@react-routern"
          />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}

export default TechIcons;
