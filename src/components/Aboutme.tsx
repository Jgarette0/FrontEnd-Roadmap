import { Card } from "./ui/card";

export function ThisIsMe() {
  return (
    <>
      <Card className="p-8 border-none flex flex-col md:flex-row justify-center place-items-center gap-4 md:gap-12  md:h-375">
        <img
          src="../avatar.jpg"
          className="rounded-full border size-28 size-48 border-white"
          alt=""
        />
        <div className="flex flex-col">
          <div className="font-roboto font-extrabold italic text-2xl md:text-5xl ">
            Hello, I'm Jilian Garette,
          </div>
          <div className="font-mono text-center text-sm md:text-1xl text-justify">
            currently in my third year pursuing a degree in Information
            Technology at Consolatrix College of Toledo City. In my free time, I
            enjoy reading Manhwa, watching TV shows, listening to music, and
            learning programming.
          </div>
        </div>
      </Card>
    </>
  );
}
