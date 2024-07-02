import { Card } from "./ui/card";

export function ThisIsMe() {
  return (
    <>
      <Card className="p-8 border-none flex flex-col md:flex-row justify-center place-items-center gap-4 md:gap-12  md:h-375">
        <img
          src="../avatar.jpg"
          className="rounded-full border size-48 border-white"
          alt=""
        />
        <div className="flex flex-col gap-y-1">
          <div className="font-roboto font-extrabold italic text-2xl md:text-5xl ">
            Hey There! I'm Jilian,
          </div>
          <div className="font-mono text-sm md:text-1xl text-justify">
            a Bachelor's degree student in Information Technology with a keen
            interest in front-end development. In my free time, I enjoy reading
            manhwa, listening to music, and learning programming.
          </div>
        </div>
      </Card>
    </>
  );
}
